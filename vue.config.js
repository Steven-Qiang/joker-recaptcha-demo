/**
 * @file: vue.config.js
 * @description: vue.config.js
 * @package: v_captcha
 * @create: 2021-09-11 04:25:20
 * @author: qiangmouren (2962051004@qq.com)
 * -----
 * @last-modified: 2022-07-26 02:16:45
 * -----
 */
module.exports = {
    productionSourceMap: false,
    publicPath: process.env.NODE_ENV === 'production' ? '/joke-recaptcha-demo/' : '',
    configureWebpack: config => {

        config.externals = {
            'vue': 'Vue',
            'ant-design-vue': 'antd'
        };
    },
}