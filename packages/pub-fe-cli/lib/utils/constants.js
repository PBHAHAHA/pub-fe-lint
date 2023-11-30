"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.STYLELINT_FILE_EXT = exports.STYLELINT_IGNORE_PATTERN = exports.PKG_VERSION = exports.PKG_NAME = exports.UNICODE = void 0;
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const pkg = JSON.parse(fs_extra_1.default.readFileSync(path_1.default.join(__dirname, "../../package.json"), "utf8"));
exports.UNICODE = {
    success: '✔',
    fail: '✖',
};
exports.PKG_NAME = pkg.name;
exports.PKG_VERSION = pkg.version;
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
