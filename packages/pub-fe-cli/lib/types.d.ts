import { ESLint } from 'eslint';
import stylelint from 'stylelint';
import markdownlint from 'markdownlint';
export interface PKG {
    eslintConfig?: any;
    eslintIgnore?: string[];
    stylelint?: any;
    peerDependencies?: Record<string, string>;
    devDependencies?: Record<string, string>;
    dependencies?: Record<string, string>;
    [key: string]: any;
}
export interface InitOptions {
    cwd: string;
    checkVersionUpdate: boolean;
    rewriteConfig?: boolean;
    eslintType?: string;
    enableESLint?: boolean;
    enableStylelint?: boolean;
    enableMarkdownlint?: boolean;
    enablePrettier?: boolean;
    disableNpmInstall?: boolean;
    version?: string;
}
export interface Config {
    enableESLint?: boolean;
    enableStylelint?: boolean;
    enableMarkdownlint?: boolean;
    enablePrettier?: boolean;
    eslintOptions?: ESLint.Options;
    stylelintOptions?: stylelint.LinterOptions;
    markdownlintOptions?: markdownlint.Options;
}
export interface ScanOptions {
    cwd: string;
    include: string;
    files?: string[];
    quiet?: boolean;
    ignore?: boolean;
    fix?: boolean;
    outputReport?: boolean;
    config?: Config;
}
