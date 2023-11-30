module.exports = {
    defaultSeverity: "warning",
    plugins: ['stylelint-scss'],
    overrides: [
        {
            files: ['**/*.{html,vue}'],
            customSyntax: 'postcss-html'
        },
        {
            files: ['**/*.scss'],
            customSyntax: 'postcss-scss'
        },
        {
            files: ['**/*.less'],
            customSyntax: 'postcss-less'
        }
    ],
    rules: {
        /**
       * stylelint 的规则配置项
       * @link https://stylelint.io/user-guide/rules/#possible-errors
       */
      'at-rule-no-unknown': null, // 禁止未知规则
      'scss/at-rule-no-unknown': true, // 
      'block-no-empty': null, //禁止空块: 比如 a { }
      'color-no-invalid-hex': true, // 禁止无效的16进制颜色 a { color: #y3 }
      'comment-no-empty': true, // 禁止空注释
      'declaration-block-no-duplicate-properties': [ //禁止在声明块中声明重复属性
        true,
        {
          ignore: ['consecutive-duplicates-with-different-values'],//忽略具有不同值的连续重复属性。
        },
      ],
      'declaration-block-no-shorthand-property-overrides': true,//禁止使用重写相关手写属性的简写属性。
      'font-family-no-duplicate-names': true,// 禁止字体中使用重复的名称
      'function-calc-no-unspaced-operator': true,//禁止在计算函数中使用无效的非间隔运算符。
      'function-linear-gradient-no-nonstandard-direction': true,//禁止线性梯度函数的非标准方向值。
      'keyframe-declaration-no-important': true,//禁止在关键帧声明中使用invalid !important。
      'media-feature-name-no-unknown': true,//禁止使用未知的媒体特性名称。
      'no-descending-specificity': null, // @reason 实际有很多这样用的，且多数人熟悉 css 优先级
      'no-duplicate-at-import-rules': true, // 禁止重复的@import
      'no-duplicate-selectors': true,// 禁止重复选择器
      'no-empty-source': null,
      'no-extra-semicolons': true,//禁止额外的分号
      'no-invalid-double-slash-comments': true, // 禁止无效的双斜杠注释
      'property-no-unknown': true, // 禁止未知属性
      'selector-pseudo-class-no-unknown': [ //禁止未知的伪类选择器
        true,
        {
          ignorePseudoClasses: ['global', 'local', 'export'],
        },
      ],
      'selector-pseudo-element-no-unknown': true, //禁止未知的伪元素
      'string-no-newline': true, //禁止使用无效换行符
      'unit-no-unknown': [ // 禁止使用未知单位，
        true,
        {
          ignoreUnits: ['rpx'],
        },
      ],
  
      /**
       * Stylistic issues
       * @link https://stylelint.io/user-guide/rules/list#stylistic-issues
       */
      indentation: 2, //指定缩进
      'block-closing-brace-newline-before': 'always-multi-line',//在多行块中，在结束大括号之前必须有一个换行符。
      'block-closing-brace-space-before': 'always-single-line',//在单行块中，右括号前必须有一个空格。
      'block-opening-brace-newline-after': 'always-multi-line',//在多行块中，在开始大括号之后必须有一个换行符。
      'block-opening-brace-space-before': 'always', // 在开始的大括号前必须有一个空格。
      'block-opening-brace-space-after': 'always-single-line', //在单行块中，在开始大括号之后必须始终有一个空格。
      'color-hex-case': 'lower', // 16进制只能是小写
      'color-hex-length': 'short',// 为十六进制颜色指定短或长表示法。
      'comment-whitespace-inside': 'always',// 注释内容的前后要有空白 /* 123 */
      'declaration-colon-space-before': 'never', // 声明的冒号前不允许有空格 a { color :pink } 这种就是错的
      'declaration-colon-space-after': 'always',// 冒号后面必须要有一个空格
      'declaration-block-single-line-max-declarations': 1,//限制单行块内的声明数量
      'declaration-block-trailing-semicolon': [ 
        'always', // 声明块后必须要有分号
        {
          severity: 'error',
        },
      ],
      'length-zero-no-unit': [
        true,
        {
          ignore: ['custom-properties'],
        },
      ],
      'max-line-length': 100, // 行最大长度
      'selector-max-id': 0, // 限制一个选择器中ID选择器的数量
      'value-list-comma-space-after': 'always-single-line',//在单行值列表中，逗号后面必须有一个空格。
  
      /**
       * stylelint-scss rules
       * @link https://www.npmjs.com/package/stylelint-scss
       */
      'scss/double-slash-comment-whitespace-inside': 'always', //注释后面要有一个空格
    },
    ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'], //忽略文件
}