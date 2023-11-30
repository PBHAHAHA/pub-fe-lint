/*
 * @Author: PBHAHAHA 314709923@qq.com
 * @Date: 2023-08-26 11:50:05
 * @LastEditors: PBHAHAHA 314709923@qq.com
 * @LastEditTime: 2023-08-26 11:50:17
 * @FilePath: /go2-fe-lint/packages/eslint-config/vue.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
    extends: [
      './index',
      './rules/vue',
    ].map(require.resolve),
    parserOptions: {
      // https://github.com/mysticatea/vue-eslint-parser#parseroptionsparser
      parser: '@babel/eslint-parser',
    },
  };
  