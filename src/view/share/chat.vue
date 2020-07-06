<template>
	<div class="service-chat">
		<div class="title">提交群信息</div>
		<div class="flex-start-center">
			<Input v-model="new_chat.chatname" placeholder="群名称或群链接" style="width: 300px"/>
			<Select v-model="new_chat.type" style="width:200px;margin-left: 20px" placeholder="群类型">
		        <Option v-for="(item,key) in chatType" :value="key" :key="key">{{ item }}</Option>
		    </Select>
		    <Select v-model="new_chat.auth" style="width:200px;margin-left: 20px" placeholder="是否需要加群验证">
		        <Option v-for="(item,key) in auth" :value="key" :key="key">{{ item }}</Option>
		    </Select>
			<Button type="primary" style="margin-left: 20px" @click="addChat">提交群信息</Button>
		</div>
		<!-- <div class="title">
			<div>我提交的群信息</div>
			<Table :columns="columns" :data="chatids"></Table>
			<Page :page-size="50" :total="5000" simple @on-change="getUserChat"/>
		</div> -->
	</div>
</template>
<script>
import {chatType} from '@/config/client'
import {addChat,getUserChat} from '@/api/share'
export default {
	data(){
		// let columns = [
		// 		{title:'群名称',key:'chatname',render: (h, params) => {
	 //                return h('span',params.row.chatname)
	 //            }},
		// 		{title:'群类型',key:'type',render: (h, params) => {
	 //                return h('span',chatType[params.row.type])
	 //            }},
		// 		{title:'是否入群验证',key:'auth',render: (h, params) => {
	 //                return h('span',{
	 //                	style:{
	 //                		color: params.row.auth?'red':''
	 //                	}
	 //                },params.row.auth?'需要':'不需要')
	 //            }},
		// 		{title:'审核状态',key:'status',render: (h, params) => {
	 //                return h('span',{
	 //                	style:{
	 //                		color: params.row.status?'red':''
	 //                	}
	 //                },params.row.status?'已通过':'未通过')
	 //            }}
		// 	]
		return {
			chatType,
			// columns,
			chatids:[],
			auth:['不需要','需要'],
			new_chat:{
				chatname:'',
				type:'',
				auth:''
			}
		}
	},
	mounted(){
		// this.getUserChat()
	},
	methods:{
		// getUserChat(page=1){
		// 	getUserChat(page,50).then((r)=>{
		// 		this.chatids = r.data.msg
		// 	})
		// },
		addChat(){
			if (!this.new_chat.chatname.trim()||!String(this.new_chat.type)||!String(this.new_chat.auth)) {
				return this.$Notice.error({title:'信息缺失'})
			}
			addChat(this.new_chat.chatname,this.new_chat.type,this.new_chat.auth).then((r)=>{
				// this.getUserChat()
				this.new_chat.chatname = ''
				this.new_chat.type = ''
				this.new_chat.auth = ''
				return this.$Notice.success({title:r.data.msg})
			}).catch((e)=>{
				return this.$Notice.error({title:e.response.data.msg})
			})
		}
	}
}	
</script>
<style lang="scss" scoped>
	.title{
		font-size: 16px;
		padding: 20px 0;
	}
</style>