<template>
  <div class="login">
    <div class="warning">
      本系统服务于海外华人（不支持中国大陆地区用户）外卖、二手、房产、交易等生活类信息发布，切勿发布虚假、违法、暴力、色情等违规信息，如有发现举报，封号处理！！！
    </div>
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <p class="login-tip">开推广账号请联系 <a href="https://t.me/GuevaraTech" target="_blank">@GuevaraTech</a></p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from '_c/login-form'
import { mapActions } from 'vuex'
export default {
  components: {
    LoginForm
  },
  methods: {
    ...mapActions([
      'handleLogin',
      'getUserInfo'
    ]),
    handleSubmit ({ account, password }) {
      this.handleLogin({ account, password }).then(res => {
        this.getUserInfo().then(res => {
          this.$router.push({
            name: this.$config.homeName
          })
        }).catch(({response})=>{
          location.reload()
          // this.$Notice.error({title:response.data.msg})
        })
      }).catch((e)=>{
        this.$Notice.error({title:e.response.data.msg})
      })
    }
  }
}
</script>

<style lang="less">
  @import './login.less';
</style>
