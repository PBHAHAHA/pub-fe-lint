## stylelint-config-pub

### 使用指南

1. 安装依赖

```bash
npm i -D stylelint stylelint-css stylelint-config-pub postcss-html postcss-less postcss-scss -D
```

2. 创建配置文件 .stylelintrc.js


3. 编辑配置文件

```js
module.exports = {
  extends: ['stylelint-config-pub'],
  rules: {
    // 自定义规则
  },
};
```
4. 在vscode中编辑时能提示

settings.json
```JSON
{
  ...
  "stylelint.validate": ["css", "scss", "less", "sass","vue"],
}
```