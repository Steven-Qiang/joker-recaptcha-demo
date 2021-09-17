/**
 * @file: vue.config.js
 * @description: vue.config.js
 * @package: v_captcha
 * @create: 2021-09-11 04:25:20
 * @author: qiangmouren (2962051004@qq.com)
 * -----
 * @last-modified: 2021-09-17 07:03:09
 * -----
 */
module.exports = {
    productionSourceMap: false,
    publicPath: process.env.NODE_ENV === 'production' ? '/joke_recaptcha_demo/' : '',
    configureWebpack: config => {

        config.externals = {
            'vue': 'Vue',
            'ant-design-vue': 'antd'
        };
    },
}