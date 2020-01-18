const autoprefixer = require('autoprefixer')


module.exports = {
    autoprefixer,
    plugins: {
     'postcss-pxtorem': {
        rootValue: 37.5, // 根元素字体大小
        unitPrecision: 5, // 允许REM单位增长的十进制数
        propList: ['*'], // 可以从px更改为rem的属性
        selectorBlackList: [], // 要忽略的选择器并保留为px
        replace: true,
        mediaQuery: false,
        minPixelValue: 12
     }
    }
   }