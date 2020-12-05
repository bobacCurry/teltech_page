<template>
	<div id="hr-client">
		<ul class="flex-start-center">
			<li class="client-item-frame" v-for="(item,key) in clientList" :key="key">
				<Card class="client-item">
          <div class="item-info">实例信息</div>
          <div class="item-info">TG账号：<b>{{item.phone}}</b></div>
          <div class="item-info">TG用户名：
            <span v-if="item.info">{{item.info.first_name}}&nbsp;&nbsp;</span>
            <Button  @click="getlClient(item.phone)" :disabled="loading" type="primary" size="small" shape="circle">更新</Button>
          </div>
          <div class="item-info">实例状态：
            <span :style="{color: item.status==2||item.status==3||item.status==4?'red':''}">{{clientStatus[item.status]}}</span>
            <a v-if="item.status==2||item.status==4" @click="restore(item.phone)">已恢复</a>
          </div>
          <div class="item-info">是否使用：<span v-if="item.used" style="color: red">已使用</span><span v-else>未使用</span></div>
          <div class="item-info">删除账号：<a @click="delClient(item.phone)">确认删除</a></div>
        </Card>
			</li>
      <li class="client-item-frame">
        <Card class="client-item">
          <div v-if="!newClient.binding&&!newRegister.binding">
            <Button type="primary" @click="newClient.binding=true">绑定已注册的TG账号</Button>
          </div>
          <br/><br/>
          <div v-if="!newClient.binding&&!newRegister.binding">
            <Button type="primary" @click="newRegister.binding=true">注册新的TG账号</Button>
          </div>
          <div v-if="newClient.binding">
            <div class="bind-item">
              <Input v-model="newClient.phone" placeholder="TG账号（带国家区号）">
                <Button slot="append" style="width: 100px" v-if="newClient.timer" :disabled="newClient.timer>0">已发送 {{newClient.timer}}s</Button>
                <Button slot="append" style="width: 100px" @click="sendCode" :disabled="loading" v-else>发送验证码</Button>
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
          <div v-if="newRegister.binding">
            <Select placeholder="选择项目" @on-change="changePid">
              <Option v-for="(item,key) in myPidList" :value="key" :key="key">{{ item.cnname }}</Option>
            </Select>
            <br><br>
            <Select v-model="newRegister.locale" placeholder="选择地区" v-if="newRegister.supportCountry">
              <Option v-for="(item,key) in localList" :value="item[0]" :key="key">{{ item[0] }} - {{ item[1] }} - {{ item[2] }}</Option>
            </Select>
            <div class="bind-item">
              <Button @click="register" type="primary" class="cancel-bind" :disabled="loading">注册电报</Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button @click="cancelRegister" type="error" class="cancel-bind" :disabled="loading">取消注册</Button>
            </div>
          </div>
        </Card>
      </li>
		</ul>
	</div>
</template>
<script>  
import {restore,delUserClient,getlClient} from '@/api/client'
import {getUserClient,sendCode,confirmCode,getProject,register} from '@/api/share'
import {serviceType,clientStatus} from '@/config/client'
import localList from '@/config/local'
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
      myPidList:[],
      localList,
      newRegister:{
        binding:false,
        myPid:null,
        supportCountry:false,
        locale:null
      },
      countdown:null,
      loading:false
    }
  },
  mounted () {
    this.getClient()
    this.getProject()
  },
  methods: {
    register(){
      if(!this.newRegister.myPid){
        return this.$Notice.error({title:"请选择渠道"})
      }
      if(this.newRegister.supportCountry&&!this.newRegister.locale){
        return this.$Notice.error({title:"请选择地区"})
      }
      this.loading = true
      register(this.newRegister.myPid,this.newRegister.locale).then(({data})=>{
        if(!data.success){
          this.$Notice.error({title:data.msg.data||data.msg.error||data.msg})
        }else{
          this.newClient.binding=false
          this.newRegister.binding=false
          this.getClient()
        }
        this.loading = false
      }).catch((e)=>{
        console.log(e)
        this.loading = false
      })
    },
    changePid(key){
      this.newRegister.myPid = this.myPidList[key].myPid
      this.newRegister.supportCountry = this.myPidList[key].supportCountry
    },
    getClient () {
      getUserClient().then((r)=>{
        if (r.data.success) {
          this.clientList = r.data.msg
        }
      })
    },
    getProject() {
      getProject().then(({data})=>{
        if (data.code === 1) {
          this.myPidList = data.data
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

      this.loading = true

      confirmCode(this.newClient.phone,this.newClient.code).then((r)=>{

        console.log(r.data)

      }).finally(()=>{
      
        this.loading = false
        
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
    cancelRegister(){
      this.newRegister.binding = false
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
