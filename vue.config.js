/**
 * @file: vue.config.js
 * @description: vue.config.js
 * @package: joker-recaptcha-demo
 * @create: 2021-09-11 04:25:20
 * @author: qiangmouren (2962051004@qq.com)
 * -----
 * @last-modified: 2022-07-27 03:59:41
 * -----
 */

module.exports = {
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/joker-recaptcha-demo/' : '',
  configureWebpack: (config) => {
    config.externals = {
      vue: 'Vue',
    };
  },
};
