/**
 * es5的 eslint 配置
 */
module.exports = {
  extends: [
    './rules/base/best-practices',
    './rules/base/possible-errors',
    './rules/base/style',
    './rules/base/variables',
    './rules/es5',
  ].map(require.resolve),
  root: true,
};
