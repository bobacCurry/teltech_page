<template>
<div class="admin-add-user">
	<div class="zone-frame">
		<h2>新增用户</h2>
		<div class="add-user flex-start-center">
			<div class="info-item">
				<Input v-model="user.account" placeholder="用户账号"/>
			</div>
			<div class="info-item">
				<Input v-model="user.password" placeholder="用户密码"/>
			</div>
			<div class="info-item">
				<Input v-model="user.name" placeholder="用户名字"/>
			</div>
			<div class="info-item">
				<Select v-model="user.job" placeholder="请选择职业">
			        <Option v-for="(item,key) in jobList" :value="key" :key="key">{{ item }}</Option>
			    </Select>
			</div>
			<div class="info-item">
				<Button type="primary" @click="addUser">创建用户</Button>
			</div>
		</div>
	</div>
</div>	
</template>
<script>
import {jobList} from '@/config/user'
import {register} from '@/api/user'
export default{
	mounted(){

	},
	data(){
		return {
			jobList,
			user:{
				account:'',
				password:'',
				name:'',
				job:''
			},
			params:{
				page:1,
				job:'',
				vip:''
			},
			userlist:[]
		}
	},
	methods:{
		addUser(){
			if (!this.user.account.trim()||!this.user.password.trim()||!this.user.name.trim()||!String(this.user.job)) {
				return this.$Notice.error({title:'注册信息缺失'})
			}
			register(this.user).then(({data})=>{
				if (data.success) {
					this.$Notice.success({title:data.msg})
					this.clearUser()
				}else{
					this.$Notice.error({title:data.msg})
				}
			})
		},
		clearUser(){
			this.user.account = ''
			this.user.password = ''
			this.user.name = ''
			this.user.job = ''
		}
	}
}	
</script>
<style lang="scss" scoped>
.admin-add-user{
	.zone-frame{
		background-color: #ffffff;
		padding: 10px;
		.add-user{
			margin-top: 20px;
			.info-item{
				width: 200px;
				margin-right: 20px;
			}
		}
	}
}	
</style>