<template>
  <div id="app">
    <h1>仅供内部使用，禁止外泄！</h1>
    <div style="margin: 25px 0;">
      <p>目前通过手机号即可查姓名、身份证号码、住址、手机号码、邮箱、开房数据等。</p>
      <p>近期发现有部分人员泄露本站，现在本站已增加人机验证。</p>
      <p>目前已知的数据有818,842,400条。这一数字还在增加！</p>
    </div>
    <form class="form-inline">
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-addon">手机号</div>
          <input type="text" class="form-control" placeholder="13000000000" maxlength="11" v-model="tel" />
        </div>
      </div>
      <button type="button" class="btn btn-primary" @click="submit" style="margin-left: 10px;">点击查询</button>
    </form>

    <footer class="footer">
      <p>
        &copy; {{ new Date().getFullYear() }}
        <a href="https://github.com/qiangmouren/joke-recaptcha-demo" target="_blank" rel="noopener noreferrer"
          >qiangmouren</a
        >
      </p>
    </footer>

    <Captcha v-if="verify" @failed="failed" @close="close" />
  </div>
</template>

<script>
import Captcha from 'joke-recaptcha/src/components/Captcha.vue';

import 'ant-design-vue/lib/message/style/index.css';
import { message } from 'ant-design-vue';

export default {
  name: 'App',
  components: {
    Captcha,
  },
  data() {
    return {
      verify: false,
      tel: '',
    };
  },
  mounted() {
    if (process.env.NODE_ENV === 'production' && !location.hostname.includes(atob('cWlhbmdtb3VyZW4='))) {
      this.$destroy();
    }
  },
  methods: {
    close() {
      this.verify = false;
    },
    failed() {
      this.verify = false;
      message.error('验证失败，请重试。');
    },
    submit() {
      if (!/^1[3456789]\d{9}$/.test(this.tel)) {
        message.error('手机号格式错误。');
        return;
      }
      message.info('请先完成人机验证。');
      this.verify = true;
    },
  },
};
</script>

<style>
body {
  padding-top: 20px;
}
.rc-imageselect-desc-wrapper {
  height: 113px;
}
.footer {
  padding-top: 40px;
  padding-bottom: 40px;
  margin-top: 40px;
  border-top: 1px solid #eee;
}
</style>
