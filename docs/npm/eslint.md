---
title: go2-fe-eslint-config
categories:
  - 工程规范
tags:
  - 工程规范
---

# go2-fe-eslint-config

:::tip
 JavaScript 规范配置包
:::

## JavaScript 项目 go2-fe-eslint-config

针对未使用 `React` 或 `Vue` 的原生 `JavaScript` 项目，使用 `ESLint` 原生规则和 [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) 规则，使用 [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser) 作为 `parser`。

### 安装

```shell
npm i -D go2-fe-eslint-config @babel/core @babel/eslint-parser eslint-plugin-import
```

### 配置

```json
{
  "extends": ["go2-fe-eslint-config"]
}
```

## JavaScript + Vue 项目 - go2-fe-eslint-config/vue

针对 `JS Vue` 的项目，继承了默认配置，并启用了 [eslint-plugin-vue](https://www.npmjs.com/package/eslint-plugin-vue) 插件的规则，使用 [vue-eslint-parser](https://www.npmjs.com/package/vue-eslint-parser) 作为 parser。

### 安装

```shell
npm i -D go2-fe-eslint-config @babel/core @babel/eslint-parser eslint-plugin-import vue-eslint-parser eslint-plugin-vue
```

### 配置

```json
{
  "extends": ["go2-fe-eslint-config/vue"]
}
```