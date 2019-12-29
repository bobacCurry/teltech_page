<template>
	<div class="service-group">
		<div class="flex-between-center title">
			<h2>创建服务订单</h2>
			<div><Button type="primary" @click="addPush" :disabled="loading">保存服务</Button></div>
		</div>
		<div class="content">
			<div class="content-title">业务配置</div>
			<div class="flex-start-center">
				<div class="option-item">
					<Select v-model="order.chat_type" style="width:200px" placeholder="广告业务类型" @on-change="changeChatType">
				        <Option v-for="(item,key) in this.chatType" :value="key" :key="key">{{ item }}</Option>
				    </Select>
				</div>
				<div class="option-item">
					<Select v-model="order.text_type" style="width:200px" placeholder="广告文本类型">
				        <Option v-for="(item,key) in this.textType" :value="key" :key="key">{{ item }}</Option>
				    </Select>
				</div>
				<div class="option-item">
					<Select v-model="order.phone" style="width:200px" placeholder="选择TG实例">
				        <Option v-for="(item,key) in this.clientList" :value="item.phone" :key="key">{{ item.phone }}</Option>
				    </Select>
				</div>
				<div class="option-item">
					<Select v-model="order.minute" style="width:200px" placeholder="请选择发送的时间(分)">
				        <Option v-for="(item,key) in this.minuteList" :value="item" :key="key">
				        	{{ item }} 分 - {{item + 20}} 分 -  {{item + 40}} 分
				        </Option>
				    </Select>
				</div>
			</div>
		</div>
		<div class="content">
			<div class="content-title">广告群配置</div>
			<div class="flex-start-center">
				<CheckboxGroup v-model="order.chat">
			        <Checkbox :label="item.chatid" v-for="(item,key) in chatList" :key="key">
			            <span class="check-item">{{item.chatid}} <label v-if="item.auth" style="color:red">(需验证)</label></span>
			        </Checkbox>
			    </CheckboxGroup>
			</div>
		</div>
		<div class="content">
			<div class="content-title">广告内容配置</div>
			<div class="flex-start-center" v-if="order.text_type==1">
				<div class="image-frame" v-if="!order.media" @click="selectImg">
					<Icon type="ios-add-circle" size="100"/>
				</div>
				<div class="image-frame back-image" v-else :style="{'background-image': 'url('+order.media+')'}">
					<Icon class="close" type="ios-close-circle" size="30" color="red" @click="order.media=''"/>
				</div>
				<form id="img-form" style="display: none">
			    	<input id="img-input" type='file' accept="image/*" @change="getImg($event)" />
			  	</form>
				<Input v-model="order.caption" type="textarea" class="text-frame" placeholder="请输入文字文案" :autosize="{minRows:10}"/>
			</div>
			<div v-else>
				<Input v-model="order.text" type="textarea" class="text-frame" placeholder="请输入广告文案" :autosize="{minRows:10}"/>
			</div>
		</div>
	</div>
</template>
<script>
import {chatType,textType,minuteList} from '@/config/client'
import {getChat} from '@/api/share'
import {getNotUsed} from '@/api/client'
import {addPush} from '@/api/service'
import {uploadImg} from '@/api/data'
export default{
	mounted(){
		this.getChat()
		this.getClient()
	},
	data(){
		return {
			chatType,
			textType,
			minuteList,
			clientList:[],
			chatList:[],
			loading:false,
			order:{
				chat_type:0,
				text_type:'',
				phone:'',
				chat:[],
				text:'',
				media:'',
				caption:'',
				minute:''
			}
		}
	},
	methods:{
		getClient(){
			getNotUsed().then((r)=>{
				if (r.data.success) {
					this.clientList = r.data.msg
				}
			})
		},
		getChat(){
			getChat(this.order.chat_type).then((r)=>{
				if (r.data.success) {
					this.chatList = r.data.msg
				}
			})
		},
		changeChatType(e){
			
			this.order.chat_type = e
			
			this.getChat()
		},
		addPush(){
			if (!String(this.order.chat_type)) {
				return this.$Notice.error({title:'请选择服务类型'})
			}
			if (!String(this.order.text_type)) {
				return this.$Notice.error({title:'请选择文本类型'})
			}
			if (!this.order.phone) {
				return this.$Notice.error({title:'请选择TG实例'})
			}
			if (!String(this.order.minute)) {
				return this.$Notice.error({title:'请选择发送的时间'})
			}
			if (!this.order.chat.length) {
				return this.$Notice.error({title:'请选择要发送的群组'})
			}
			if (String(this.order.text_type)==='0'&&!this.order.text.trim()) {
				return this.$Notice.error({title:'请填写广告文本'})
			}
			if (String(this.order.text_type)==='1'&&!this.order.media.trim()) {
				return this.$Notice.error({title:'请填写广告文本'})
			}

			this.loading = true

			addPush(this.order).then((r)=>{

				if (r.data.success) {
					
					this.$router.push('/deal/service')

					return this.$Notice.success({title:r.data.msg})
				}
			}).catch((e)=>{
			
				this.$Notice.error({title:e.response.data.msg})
			
			}).finally(()=>{
      
		    	this.loading = false
		        
		    })
		},
    	selectImg(){
	        document.getElementById('img-input').click()
    	},
    	getImg(e){

    		let file = e.target.files[0]

    		e.target.value = ''

    		if (!file) {

    			return false
    		}

	        if (file.size>300000) {

	          return this.$Notice.error({title:'图片大小不得超过300kb'})
	        }

    		let vue = this

    		let reader = new FileReader()
            
            reader.readAsDataURL(file)
            
            reader.onload=function(){

            	vue.upload(this.result)
            }
    	},
    	upload(image){
    		uploadImg({image}).then(({data})=>{
    			if (data.success) {
    				this.order.media = data.path
    			}else{
    				this.$Notice.error({title:data.msg})
    			}
    		})
    	}
	}
}	
</script>
<style lang="scss" scoped>
.service-group{
	.title,.content{
		background-color: #ffffff;
		padding:20px;
	}
	.content{
		margin-top: 10px;
		.content-title{
			padding: 10px 0;
			font-size: 16px;
		}
		.option-item{
			margin-right: 10px;
		}
		.check-item{
			display: inline-block;
			min-width: 100px;
		}
		.image-frame{
			width: 300px;
			height: 200px;
			text-align: center;
			line-height: 200px;
			border:1px dashed #333333;
			position: relative;
			.close{
				position: absolute;
				top: 10px;
				right: 10px;
			}
		}
		.text-frame{
			margin-top: 10px;
		}
	}
}	
</style>