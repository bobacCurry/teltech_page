<template>
  <div class="login">
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
          this.$Notice.error({title:response.data.msg})
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
