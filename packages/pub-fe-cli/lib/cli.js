#!/usr/bin/env node
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
const commander_1 = require("commander");
const constants_1 = require("./utils/constants");
const init_1 = __importDefault(require("./actions/init"));
const cwd = process.cwd();
commander_1.program
    .version(constants_1.PKG_VERSION)
    .description(`${constants_1.PKG_NAME} 购商云汇前端开发规范的lint脚手架工具`);
commander_1.program
    .command('init')
    .description('一键接入：为项目初始化规范工具和配置，可以根据项目类型和需求进行定制')
    .option('--vscode', '写入.vscode/setting.json配置')
    .action((cmd) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("CMD---", cmd);
    if (cmd.vscode) {
    }
    else {
        yield (0, init_1.default)({
            cwd,
            checkVersionUpdate: true,
        });
    }
}));
commander_1.program.parse(process.argv);
