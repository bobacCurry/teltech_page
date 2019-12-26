<template>
	<div id="hr-client">
		<ul class="flex-start-center">
			<li class="client-item-frame" v-for="(item,key) in clientList" :key="key">
				<Card class="client-item">
          <div class="item-info">实例信息</div>
          <div class="item-info">TG账号：<b>{{item.phone}}</b></div>
          <div class="item-info">TG用户名：<a v-if="!item.name">获取</a><span v-else>{{item.name}}</span></div>
          <div class="item-info">实例状态：{{clientStatus[item.status]}}</div>
          <div class="item-info">是否使用：<span v-if="item.used" style="color: red">已使用</span><span v-else>未使用</span></div>
        </Card>
			</li>
      <li class="client-item-frame">
        <Card class="client-item">
          <Button v-if="!newClient.binding" @click="newClient.binding=true">点击绑定客户端</Button>
          <div v-else>
            <div class="bind-item">
              <Input v-model="newClient.phone" placeholder="TG账号（带国家区号）">
                <Button slot="append" style="width: 100px" v-if="newClient.timer" :disabled="newClient.timer>0">已发送 {{newClient.timer}}s</Button>
                <Button slot="append" style="width: 100px" @click="sendCode" :disabled="laoding" v-else>发送验证码</Button>
              </Input>
            </div>
            <div class="bind-item">
              <Input v-model="newClient.code" placeholder="输入验证码">
                <Button slot="append" style="width: 100px" @click="confirmCode">确认验证码</Button>
              </Input>
            </div>
            <div class="bind-item">
              <Button @click="cancelConfirm" type="error" class="cancel-bind">取消绑定</Button>
            </div>
          </div>
        </Card>
      </li>
		</ul>
	</div>
</template>
<script>
import {getUserClient,sendCode,confirmCode} from '@/api/share'
import {serviceType,clientStatus} from '@/config/client'
export default {
  data () {
    return {
      clientList: [],
      clientStatus:clientStatus,
      newClient:{
        binding:false,
        phone:'',
        code:'',
        type:null,
        timer:0
      },
      countdown:null,
      laoding:false
    }
  },
  mounted () {
    this.getClient()
  },
  methods: {
    getClient () {
    
      getUserClient().then((r)=>{
    
        if (r.data.success) {
    
          this.clientList = r.data.msg
    
        }
      })
    },
    sendCode () {
      if (!this.newClient.phone.trim()) {
      
        return this.$Notice.error({title:"请输入telegram账号"})
      
      }
      
      sendCode(this.newClient.phone).then((r)=>{
        
        if (r.data.success) {

          this.newClient.phone = ''

          this.newClient.code = ''

          this.newClient.binding=false

          this.getClient()
        
          return this.$Notice.success({title:r.data.msg})
        
        }else{
        
          return this.$Notice.error({title:r.data.msg})
        
        }
      
      }).catch((e)=>{
      
        return this.$Notice.error({title:e.response.data.msg})      
      
      }).finally(()=>{
      
        this.stopCount()
        
      })
      
      this.startCount()
    },
    confirmCode() {
      if (!this.newClient.phone.trim()) {
        return this.$Notice.error({title:"请输入telegram账号"})
      }

      if (!this.newClient.timer) {
        return this.$Notice.error({title:"请先发送验证码"})
      }
      
      if (!this.newClient.code) {
        return this.$Notice.error({title:"请输入验证码"})
      }

      this.laoding = true

      confirmCode(this.newClient.phone,this.newClient.code).then((r)=>{

        console.log(r.data)

      }).finally(()=>{
      
        this.laoding = false
        
      })
    },
    cancelConfirm(){

      if (this.newClient.phone.trim()&&this.newClient.timer) {

        confirmCode(this.newClient.phone,'1111').then((r)=>{
      
          console.log(r.data)
      
        }) 
      }
      
      this.newClient.binding = false

      this.newClient.phone = ''

      this.newClient.code = ''

      this.newClient.type = null

      this.stopCount()
    },
    startCount(){

      this.newClient.timer = 120
      
      this.countdown = setInterval(()=>{
      
        this.newClient.timer--
      
        if(this.newClient.timer === 0) {
      
          clearInterval(this.countdown)
      
        }
      
      },1000)
    },
    stopCount(){

      this.newClient.timer = 0
      
      clearInterval(this.countdown)
    }
  }
}
</script>
<style lang="scss" scoped>
.client-item-frame{
	width: 25%;
	.client-item{
    height: 200px;
    .item-info{
      margin-top: 10px;
    }
    .bind-item{
      margin-top: 10px;
      .cancel-bind{
        margin-top: 20px;
      }
    }
	}
}
</style>
