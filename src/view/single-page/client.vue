<template>
	<div id="hr-client">
		<ul class="flex-start-center">
			<li class="client-item-frame" v-for="(item,key) in clientList" :key="key">
				<Card class="client-item">
          <div class="item-info">实例信息</div>
          <div class="item-info">TG账号：<b>{{item.phone}}</b></div>
          <div class="item-info">TG用户名：{{item.name?item.name:"获取"}}</div>
          <div class="item-info">服务类型：{{item.type | getType}}</div>
          <div class="item-info">实例状态：{{item.status | getStatus}}</div>
        </Card>
			</li>
      <li class="client-item-frame">
        <Card class="client-item">
          <Button v-if="!newClient.binding" @click="newClient.binding=true">点击绑定客户端</Button>
          <div v-else>
            <div class="bind-item">
               <Select v-model="newClient.type" style="width:200px">
                <Option v-for="(item,key) in serviceType" :key="key" :value="key">{{ item }}</Option>
              </Select>
            </div>
            <div class="bind-item">
              <Input v-model="newClient.phone" placeholder="TG账号（带国家区号）">
                <Button slot="append" style="width: 100px" v-if="newClient.timer" :disabled="newClient.timer>0">已发送 {{newClient.timer}}s</Button>
                <Button slot="append" style="width: 100px" @click="sendCode" v-else>发送验证码</Button>
              </Input>
            </div>
            <div class="bind-item">
              <Input v-model="newClient.code" placeholder="输入验证码">
                <Button slot="append" style="width: 100px" @click="confirmCode">确认验证码</Button>
              </Input>
            </div>
            <div class="bind-item">
              <Button @click="cancelConfirm" type="error">取消绑定</Button>
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
      serviceType:serviceType,
      clientStatus:clientStatus,
      newClient:{
        binding:false,
        phone:'',
        code:'',
        type:null,
        timer:0
      },
      countdown:null
    }
  },
  filters: {
    getType:(value)=>{
      
      return serviceType[value]
    
    },
    getStatus:(value)=>{

      return clientStatus[value]
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
      
      if (this.newClient.type===null) {
      
        return this.$Notice.error({title:"请选择服务类型"})
      
      }
      
      if (!this.newClient.phone.trim()) {
      
        return this.$Notice.error({title:"请输入telegram账号"})
      
      }
      
      sendCode(this.newClient.phone,this.newClient.type).then((r)=>{
        
        if (r.data.success) {

          this.newClient.phone = ''

          this.newClient.code = ''

          this.newClient.type = null

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

      confirmCode(this.newClient.phone,this.newClient.code).then((r)=>{
        console.log(r.data)
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
	height: 200px;
	.client-item{
		height: 100%;
    .item-info{
      margin-top: 10px;
    }
    .bind-item{
      margin-top: 10px;
    }
	}
}
</style>
