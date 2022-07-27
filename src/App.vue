<template>
  <div id="app">
    <h1>仅供内部使用，禁止外泄！</h1>
    <div style="margin: 25px 0">
      <p>目前通过手机号即可查姓名、身份证号码、住址、手机号码、邮箱、开房数据等。</p>
      <p>近期发现有部分人员泄露本站，现在本站已增加人机验证。</p>
      <p>目前已知的数据有818,842,400条。这一数字还在增加！</p>
    </div>
    <form class="form" @submit.prevent>
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-addon">手机号</div>
          <input
            type="text"
            class="form-control"
            placeholder="13000000000"
            maxlength="11"
            v-model="tel"
            style="max-width: 234px;"
          />
        </div>
      </div>

      <div class="form-group">
        <Captcha />
      </div>
      <div class="form-group">
        <button type="button" class="btn btn-primary" @click="submit">点击查询</button>
      </div>
    </form>

    <footer class="footer">
      <p>
        &copy; {{ new Date().getFullYear() }}
        <a href="https://github.com/qiangmouren/joker-recaptcha-demo" target="_blank" rel="noopener noreferrer"
          >qiangmouren</a
        >
      </p>
    </footer>
  </div>
</template>

<script>
import Captcha from 'joker-recaptcha/src/components/Captcha.vue';

export default {
  name: 'App',
  components: {
    Captcha,
  },
  data() {
    return {
      tel: '',
    };
  },
  mounted() {
    // cspell-checker:disable-next-line
    if (process.env.NODE_ENV === 'production' && !location.hostname.includes(atob('cWlhbmdtb3VyZW4='))) {
      this.$destroy();
    }
  },
  methods: {
    submit() {
      const opt = { position: 'top-center', duration: 1000 };
      if (!/^1[3456789]\d{9}$/.test(this.tel)) {
        return this.$toasted.show('手机号格式错误。', opt);
      }
      this.$toasted.show('请先完成人机验证。', opt);
    },
  },
};
</script>

<style>
body {
  padding-top: 20px;
}
.footer {
  padding-top: 40px;
  padding-bottom: 40px;
  margin-top: 40px;
  border-top: 1px solid #eee;
}
.rc-imageselect-desc-wrapper {
  height: 113px;
}
</style>
