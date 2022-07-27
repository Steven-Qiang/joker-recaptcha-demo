/**
 * @file: vue.config.js
 * @description: vue.config.js
 * @package: v_captcha
 * @create: 2021-09-11 04:25:20
 * @author: qiangmouren (2962051004@qq.com)
 * -----
 * @last-modified: 2022-07-27 12:47:08
 * -----
 */
module.exports = {
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/joke-recaptcha-demo/' : '',
  chainWebpack: (config) => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap((options) => {
        options.limit = Infinity;
        return options;
      });
  },
  configureWebpack: (config) => {
    config.externals = {
      vue: 'Vue',
      'ant-design-vue': 'antd',
    };
  },
};
