#!/usr/bin/env node
import path from 'path';
// import fs from 'fs-extra';
import { program } from 'commander';
import { PKG_NAME, PKG_VERSION } from './utils/constants';
import init from './actions/init';

const cwd = process.cwd();
program
  .version(PKG_VERSION)
  .description(
    `${PKG_NAME} 购商云汇前端开发规范的lint脚手架工具`,
    );
program
  .command('init')
  .description('一键接入：为项目初始化规范工具和配置，可以根据项目类型和需求进行定制')
  .option('--vscode', '写入.vscode/setting.json配置')
  .action(async (cmd) => {
    console.log("CMD---",cmd)
    if (cmd.vscode) {
      // const configPath = path.resolve(cwd, `${PKG_NAME}.config.js`);
      // generateTemplate(cwd, require(configPath), true);
    } else {
      await init({
        cwd,
        checkVersionUpdate: true,
      });
    }
  });

  // program
  // .command('update')
  // .description(`更新 ${PKG_NAME} 至最新版本`)
  // .action(() => update(true));

program.parse(process.argv);