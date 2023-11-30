import path from "path"
import fs from "fs-extra"

const pkg: Record<string, any> = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../../package.json"), "utf8")
)

export const UNICODE = {
  success: '✔', // ✔
  fail: '✖', // ✖
}

// 包名
export const PKG_NAME:string = pkg.name
export const PKG_VERSION: string = pkg.version


// stylelint 需要忽略的文件
export const STYLELINT_IGNORE_PATTERN: string[] = [
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
// stylelint 扫描文件扩展名 用于写入vscode中的settings.json
export const STYLELINT_FILE_EXT: string[] = ['.css', '.scss', '.less', '.sass','vue'];