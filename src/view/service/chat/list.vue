<template>
<div class="user-chat">
	<div class="zone-frame">
		<h2>创建新群</h2>
		<div class="flex-start-center option-frame">
			<div class="info-item">
				<Input v-model="chat.title" placeholder="群名称"/>
			</div>
			<div class="info-item">
				<Input v-model="chat.description" placeholder="群描述"/>
			</div>
			<div class="info-item">
				<Select v-model="chat.phone" style="width:200px" placeholder="选择TG账号">
			        <Option v-for="(item,key) in clientList" :value="item.phone" :key="key">{{ item.phone }}</Option>
			    </Select>
			</div>
			<div class="info-item">
				<Button type="primary" @click="createGroup">创建群组</Button>
			</div>
		</div>
	</div>
	<div class="zone-frame">
		<h2>用户群列表</h2>
		<div class="add-chat-list flex-between-top">
			
		</div>
	</div>
</div>
</template>
<script>
import {createGroup} from '@/api/chat'
import {getUserClient} from '@/api/share'
export default{
	mounted(){
		this.getClient()
	},
	data(){
		return {
			chat:{
				title:'',
				description:'',
				phone:''
			},
			clientList:[]
		}
	},
	methods:{
		getClient(){

	      	getUserClient().then((r)=>{

	        	if (r.data.success) {
	          	
	          		this.clientList = r.data.msg
	        	}
	      	})
	    },
		createGroup(){
			
			if (!this.chat.title) return this.$Notice.error({title:'群名称不得为空'})
			
			if (!this.chat.description) return this.$Notice.error({title:'群描述不得为空'})
			
			createGroup(this.chat).then(({data})=>{

				console.log(data)
			
			})
		}
	}
}	
</script>
<style lang="scss" scoped>
.zone-frame{
	background: #ffffff;
	padding: 10px;
	margin-bottom: 10px;
	.option-frame{
		margin-bottom: 20px;
		.info-item{
			margin-right: 10px;
			width: 20%;
		}
	}
}
</style>