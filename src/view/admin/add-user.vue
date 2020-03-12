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
				<Select v-model="user.vip" placeholder="是否vip">
			        <Option :value="0" :key="0">否</Option>
			        <Option :value="1" :key="1">是</Option>
			    </Select>
			</div>
			<div class="info-item">
				<Button type="primary" @click="addUser">创建用户</Button>
			</div>
		</div>
	</div>
	<div class="zone-frame">
		<h2>用户列表</h2>
		<ul class="user-list-frame user-list-title">
			<li class="flex-start-center">
				<div class="account">账号</div>
				<div class="name">昵称</div>
				<div class="vip">是否vip</div>
				<div class="action">操作</div>
			</li>
		</ul>
		<ul class="user-list-frame">
			<li class="flex-start-center user-list-item" v-for="(item,key) in userlist" :key="key">
				<div class="account">{{item.account}}</div>
				<div class="name">{{item.name}}</div>
				<div class="vip" v-if="item.vip" style="color: red">是</div>
				<div class="vip" v-else>否</div>
				<div class="action">
					<Button type="primary" size="small" class="action-item" @click="setVip(item._id)">设为vip</Button>
					<Button type="primary" size="small" class="action-item" @click="resetPwd(item._id)">重制密码</Button>
				</div>
			</li>
		</ul>
		<Page :page-size="50" :total="5000" :current="page" simple @on-change="getUsers"/>
	</div>
</div>	
</template>
<script>
import {jobList} from '@/config/user'
import {register} from '@/api/user'
import {getUsers,resetPwd,setVip} from '@/api/admin'
export default{
	mounted(){
		this.getUsers(1)
	},
	data(){
		return {
			jobList,
			user:{
				account:'',
				password:'',
				name:'',
				job:'',
				vip:''
			},
			params:{
				page:1,
				job:'',
				vip:''
			},
			page:1,
			userlist:[]
		}
	},
	methods:{
		getUsers(page){
			this.page = page
			getUsers(this.page).then(({data})=>{
				this.userlist = data.msg
			})
		},
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
		},
		resetPwd(_id){
			resetPwd(_id).then(({data})=>{
				if (data.success) {
					return this.$Notice.success({title:'已重制密码为 123qwe'})
				}
			})
		},
		setVip(_id){
			setVip(_id).then(({data})=>{
				if (data.success) {
					this.getUsers(this.page)
					return this.$Notice.success({title:'设置vip成功'})
				}
			})
		}
	}
}	
</script>
<style lang="scss" scoped>
.admin-add-user{
	.zone-frame{
		background-color: #ffffff;
		padding: 10px;
		margin-bottom: 10px;
		.add-user{
			margin-top: 20px;
			.info-item{
				width: 150px;
				margin-right: 20px;
			}
		}
	}
	.user-list-title{
		font-size: 16px;
		padding: 10px 0;
		.account{
			width: 20%;
		}
		.name{
			width: 20%;
		}
		.vip{
			width: 20%;
		}
		.action{
			width: 40%;
		}
	}
	.user-list-frame{
		.user-list-item{
			padding: 10px 0;
			border-bottom: 1px solid #f7f7f7;
			.account{
				width: 20%;
			}
			.name{
				width: 20%;
			}
			.vip{
				width: 20%;
			}
			.action{
				width: 40%;
				.action-item{
					margin-right: 10px;
				}
			}
		}
	}
}	
</style>