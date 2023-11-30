"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const inquirer_1 = __importDefault(require("inquirer"));
const log_1 = __importDefault(require("../utils/log"));
const npm_type_1 = __importDefault(require("../utils/npm-type"));
const conflict_resolve_1 = __importDefault(require("../utils/conflict-resolve"));
const cross_spawn_1 = __importDefault(require("cross-spawn"));
const constants_1 = require("../utils/constants");
const generate_template_1 = __importDefault(require("../utils/generate-template"));
let step = 0;
const chooseEnableStylelint = (defaultValue) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("inquirer----");
    const { enable } = yield inquirer_1.default.prompt({
        type: 'confirm',
        name: 'enable',
        message: `---${++step}. 是否需要使用 stylelint（若没有样式文件则不需要）：`,
        default: defaultValue,
    });
    return enable;
});
const init = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const cwd = options.cwd || process.cwd();
    const isTest = process.env.NODE_ENV === 'test';
    const checkVersionUpdate = options.checkVersionUpdate || false;
    const disableNpmInstall = options.disableNpmInstall || false;
    const config = {};
    const pkgPath = path_1.default.resolve(cwd, 'package.json');
    let pkg = fs_extra_1.default.readJSONSync(pkgPath);
    if (!isTest && checkVersionUpdate) {
        console.log('cli 有更新');
    }
    if (typeof options.enableStylelint === 'boolean') {
        config.enableStylelint = options.enableStylelint;
    }
    else {
        config.enableStylelint = yield chooseEnableStylelint(!/node/.test(config.eslintType));
    }
    if (!isTest) {
        log_1.default.info(`---${++step}. 检查并处理项目中可能存在的依赖和配置冲突`);
        pkg = yield (0, conflict_resolve_1.default)(cwd, options.rewriteConfig);
        log_1.default.success(`---${step}. 已完成项目依赖和配置冲突检查处理 ✔`);
        if (!disableNpmInstall) {
            log_1.default.info(`---${++step}. 安装依赖`);
            const npm = yield npm_type_1.default;
            cross_spawn_1.default.sync(npm, ['i', '-D', constants_1.PKG_NAME], { stdio: 'inherit', cwd });
            log_1.default.success(`---${step}. 安装依赖成功  ${'✔'}`);
        }
    }
    log_1.default.info(`---${++step}. 写入配置文件`);
    (0, generate_template_1.default)(cwd, config);
    log_1.default.success(`---${step}. 写入配置文件成功 ${'✔'}`);
});
exports.default = init;
