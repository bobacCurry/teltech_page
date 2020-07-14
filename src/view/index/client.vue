<template>
	<div id="hr-client">
		<ul class="flex-start-center">
			<li class="client-item-frame" v-for="(item,key) in clientList" :key="key">
				<Card class="client-item">
          <div class="item-info">实例信息</div>
          <div class="item-info">TG账号：<b>{{item.phone}}</b></div>
          <div class="item-info">TG用户名：
            <span v-if="item.info">{{item.info.first_name}}</span>
            <!-- <Button  @click="getlClient(item.phone)" :disabled="loading" type="primary" size="small" shape="circle">更新</Button> -->
          </div>
          <div class="item-info">实例状态：
            <span :style="{color: item.status==2||item.status==3?'red':''}">{{clientStatus[item.status]}}</span>
            <a v-if="item.status==2||item.status==4" @click="restore(item.phone)">已恢复</a>
            <span v-if="item.status==0">
              <a @click="$router.push(`/add_chat?phone=${item.phone}`)"> 去加群 </a>(<a @click="addFinish(item.phone,key)" style="color: red"> 已加过 </a>)
            </span>
          </div>
          <div class="item-info">是否使用：<span v-if="item.used" style="color: red">已使用</span><span v-else>未使用</span></div>
          <div class="item-info">删除账号：<a @click="delClient(item.phone)">确认删除</a></div>
        </Card>
			</li>
      <li class="client-item-frame">
        <Card class="client-item">
          <Button type="primary" v-if="!newClient.binding" @click="newClient.binding=true">绑定已注册的TG账号</Button>
          <div v-else>
            <div class="bind-item">
              <Input v-model="newClient.phone" placeholder="TG账号（带国家区号）">
                <Button slot="append" style="width: 100px" v-if="newClient.timer" :disabled="newClient.timer>0">已发送 {{newClient.timer}}s</Button>
                <Button slot="append" style="width: 100px" @click="sendCode" :disabled="loading" v-else>发送验证码</Button>
              </Input>
            </div>
            <div class="bind-item">
              <Input v-model="newClient.code" placeholder="输入验证码">
                <Button slot="append" style="width: 100px" @click="confirmCode" :disabled="loading">确认验证码</Button>
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
import {restore,delUserClient,getlClient,addFinish} from '@/api/client'
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
      loading:false
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
    addFinish(phone,key){
      this.$Modal.confirm({
                
          title: '确认加过群了么？',
          
          content: '这个飞机号已经加过群了是吧，没加过群要先去加群的哦～～',
        
          onOk: () => {
            addFinish(phone).then(({ data })=>{
              if (data.success) {
                this.clientList[key].status = 1
              }
            })
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
        
          return this.$Notice.success({title:'绑定成功'})
        
        }else{
        
          return this.$Notice.error({title:r.data.msg})
        
        }
      
      }).catch((e)=>{
      
        return this.$Notice.error({title:e.response.data.msg})      
      
      }).finally(()=>{
      
        this.stopCount()

        this.loading = false
        
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

      this.loading = true

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
    },
    restore(phone){
      if (this.loading) {
        return false
      }
      this.loading = true
      restore(phone).then(({data})=>{
        this.getClient()
      }).finally(()=>{
        this.loading = false
      })
    },
    delClient(phone){
      this.$Modal.confirm({
        title: '是否删除该账号？',
        content: '是否删除该账号？',
        onOk: () => {
          delUserClient(phone).then(({data})=>{
            if (data.success) {
              this.getClient()
              return this.$Notice.success({title:data.msg})
            }else{
              return this.$Notice.error({title:'解除错误',desc:data.msg})
            }
          })
        }
      })
    },
    getlClient(phone){
      if (this.loading) {
        return false
      }
      this.loading = true
      getlClient(phone).then(({data})=>{
        this.getClient()
      }).finally(()=>{
        this.$Notice.info({title:'更新完毕'})
        this.loading = false
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.client-item-frame{
	width: 25%;
	.client-item{
    height: 230px;
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
