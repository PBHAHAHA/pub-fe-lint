"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ESLINT_IGNORE_PATTERN = exports.ESLINT_FILE_EXT = exports.STYLELINT_FILE_EXT = exports.STYLELINT_IGNORE_PATTERN = exports.PROJECT_TYPES = exports.PKG_VERSION = exports.PKG_NAME = exports.UNICODE = void 0;
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const pkg = JSON.parse(fs_extra_1.default.readFileSync(path_1.default.join(__dirname, "../../package.json"), "utf8"));
exports.UNICODE = {
    success: '✔',
    fail: '✖',
};
exports.PKG_NAME = pkg.name;
exports.PKG_VERSION = pkg.version;
exports.PROJECT_TYPES = [
    {
        name: '未使用 React、Vue、Node.js 的项目（JavaScript）',
        value: 'index',
    },
    {
        name: 'Vue 项目（JavaScript）',
        value: 'vue',
    },
    {
        name: 'Vue 项目（TypeScript）',
        value: 'typescript/vue',
    },
    {
        name: '使用 ES5 及之前版本 JavaScript 的老项目',
        value: 'es5',
    },
];
exports.STYLELINT_IGNORE_PATTERN = [
    'node_modules/',
    'build/',
    'dist/',
    'coverage/',
    'es/',
    'lib/',
    '**/*.min.css',
    '**/*-min.css',
    '**/*.bundle.css',
];
exports.STYLELINT_FILE_EXT = ['.css', '.scss', '.less', '.sass', 'vue'];
exports.ESLINT_FILE_EXT = ['.js', '.jsx', '.ts', '.tsx', '.vue'];
exports.ESLINT_IGNORE_PATTERN = [
    'node_modules/',
    'build/',
    'dist/',
    'coverage/',
    'es/',
    'lib/',
    '**/*.min.js',
    '**/*-min.js',
    '**/*.bundle.js',
];
