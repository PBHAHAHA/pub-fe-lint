import path from 'path';
import fs from 'fs-extra';
import inquirer from 'inquirer';
import type { InitOptions, PKG } from '../types';
import log from '../utils/log';
import npmType from '../utils/npm-type';
import conflictResolve from '../utils/conflict-resolve';
import spawn from 'cross-spawn'
import { PKG_NAME, PROJECT_TYPES } from '../utils/constants';
import generateTemplate from '../utils/generate-template';

let step = 0
/**
 * 选择项目语言和框架
 */
const chooseEslintType = async (): Promise<string> => {
  const { type } = await inquirer.prompt({
    type: 'list',
    name: 'type',
    message: `---${++step}. 请选择项目的语言（JS/TS）和框架（React/Vue）类型：`,
    choices: PROJECT_TYPES,
  });

  return type;
};

/**
 * 选择是否启用 stylelint
 * @param defaultValue
 */
const chooseEnableStylelint = async (defaultValue: boolean): Promise<boolean> => {
  console.log("inquirer----")
  const { enable } = await inquirer.prompt({
    type: 'confirm',
    name: 'enable',
    message: `---${++step}. 是否需要使用 stylelint（若没有样式文件则不需要-）：`,
    default: defaultValue,
  });

  return enable;
};

/**
 * 选择是否启用 prettier
 */
const chooseEnablePrettier = async (): Promise<boolean> => {
  const { enable } = await inquirer.prompt({
    type: 'confirm',
    name: 'enable',
    message: `---${++step}. 是否需要使用 Prettier 格式化代码：`,
    default: true,
  });

  return enable;
};


const init  = async (options: InitOptions) => {
  const cwd = options.cwd || process.cwd();// 获取执行路径
  const isTest = process.env.NODE_ENV === 'test'; // 是否是测试环境
  const checkVersionUpdate = options.checkVersionUpdate || false;// 检查是否自动更新
  const disableNpmInstall = options.disableNpmInstall || false;//是否强制安装
  const config: Record<string, any> = {}; // 存储用户交互的值
  const pkgPath = path.resolve(cwd, 'package.json'); // 获取package.json 的路径
  let pkg: PKG = fs.readJSONSync(pkgPath);
  // cli是否更新
  if (!isTest && checkVersionUpdate) {
    // await update(false);
    console.log('cli 有更新');
  }
  // 初始化 `enableESLint`，默认为 true，无需让用户选择
  if (typeof options.enableESLint === 'boolean') {
    config.enableESLint = options.enableESLint;
  } else {
    config.enableESLint = true;
  }

  // 初始化 `eslintType`
  if (options.eslintType && PROJECT_TYPES.find((choice) => choice.value === options.eslintType)) {
    config.eslintType = options.eslintType;
  } else {
    config.eslintType = await chooseEslintType();
  }
  // 初始化 `enableStylelint`
  if (typeof options.enableStylelint === 'boolean') {
    config.enableStylelint = options.enableStylelint;
  } else {
    config.enableStylelint = await chooseEnableStylelint(!/node/.test(config.eslintType));
  }

  // 初始化 `enablePrettier`
  if (typeof options.enablePrettier === 'boolean') {
    config.enablePrettier = options.enablePrettier;
  } else {
    config.enablePrettier = await chooseEnablePrettier();
  }
  if (!isTest) {
    log.info(`---${++step}. 检查并处理项目中可能存在的依赖和配置冲突`);
    pkg = await conflictResolve(cwd, options.rewriteConfig);
    log.success(`---${step}. 已完成项目依赖和配置冲突检查处理 ✔`);

    if (!disableNpmInstall) {
      log.info(`---${++step}. 安装依赖`);
      const npm = await npmType;
      spawn.sync(npm, ['i', '-D', PKG_NAME], { stdio: 'inherit', cwd });
      // 安装stylelint的依赖
      if (config.enableStylelint) {
        spawn.sync(npm, ['i', '-D', 'stylelint','stylelint-scss','stylelint-config-pub', 'postcss-html', 'postcss-scss', 'postcss-less'], { stdio: 'inherit', cwd });
        
      }
      log.success(`---${step}. 安装依赖成功  ${'✔'}`);
    }
  }

  log.info(`---${++step}. 写入配置文件`);
  generateTemplate(cwd, config);
  log.success(`---${step}. 写入配置文件成功 ${'✔'}`);

}

export default init