<template>
<div class="admin-proxy">
	<div class="zone-frame">
		<h2>新增代理</h2>
		<div class="info-frame flex-start-center">
			<div class="info-item">
				<Input v-model="proxy.hostname" placeholder="地址"/>
			</div>
			<div class="info-item">
				<Input v-model="proxy.port" placeholder="端口"/>
			</div>
			<div class="info-item">
				<Input v-model="proxy.username" placeholder="用户名"/>
			</div>
			<div class="info-item">
				<Input v-model="proxy.password" placeholder="密码"/>
			</div>
			<div class="info-item">
				<Input v-model="proxy.minute" placeholder="时间（分）"/>
			</div>
			<div class="info-item">
				<Button type="primary" @click="addProxy">创建代理</Button>
			</div>
		</div>
	</div>
	<div class="zone-frame">
		<ul>
			<li class="flex-start-center list-item">
				<div class="host">地址</div>
				<div class="port">端口</div>
				<div class="name">用户名</div>
				<div class="pasd">密码</div>
				<div class="time">时间（分）</div>
				<div class="status">状态</div>
				<div class="action">操作</div>
			</li>
			<li class="flex-start-center list-item" v-for="(item,key) in proxy_list" :key="key">
				<div class="host">{{item.hostname}}</div>
				<div class="port">{{item.port}}</div>
				<div class="name">{{item.username}}</div>
				<div class="pasd">{{item.password}}</div>
				<div class="time">{{item.minute}}</div>
				<div class="status" :style="{color:item.status?'green':''}">{{item.status?'开启':'关闭'}}</div>
				<div class="action"><a @click="changeStatus(item._id,item.status,key)">{{item.status?'关闭':'开启'}}</a>
					&nbsp;
					<a @click="delConfirm(item._id)">删除</a>
				</div>
			</li>
		</ul>
	</div>
</div>	
</template>
<script>
import {addProxy,getProxy,delProxy,changeStatus} from '@/api/proxy'
export default{
	mounted(){
		this.getProxy()
	},
	data(){
		return {
			proxy_list:[],
			proxy:{
				hostname:'',
				port:0,
				username:'',
				password:'',
				minute:0
			}
		}
	},
	methods:{
		addProxy(){
			if (!this.proxy.hostname.trim()) { return this.$Notice.error({title:'host地址缺失'}) }		

			if (!this.proxy.port) { return this.$Notice.error({title:'port缺失'}) }

			if (!String(this.proxy.minute)) { return this.$Notice.error({title:'minute缺失'}) }

			if (isNaN(this.proxy.port)) { return this.$Notice.error({title:'port必须为数字'}) }

			if (isNaN(this.proxy.minute)) { return this.$Notice.error({title:'minute必须为数字'}) }

			addProxy(this.proxy).then(({data})=>{
				
				if (data.success) {
				
					this.getProxy()
				
				}else{
				
					this.$Notice.error({title:data['msg']})
				}
			})
		},
		delConfirm(_id){
			this.$Modal.confirm({
                title: '是否删除该代理信息？',
                content: '删除该条代理',
                onOk: () => {
                    this.delProxy(_id)
                }
            })
		},
		delProxy(_id){
			delProxy(_id).then(({data})=>{
				
				if (data.success) {

					this.getProxy()
					
					this.$Notice.success({title:data['msg']})
				
				}else{
				
					this.$Notice.error({title:data['msg']})
				}
			})
		},
		getProxy(){
			getProxy().then(({data})=>{
				
				if (data.success) {
				
					this.proxy_list = data['msg']
				
				}else{
				
					this.$Notice.error({title:data['msg']})
				}
			})
		},
		changeStatus(_id,status,key){

			let to = status?0:1
			
			changeStatus(_id,to).then(({data})=>{

				if (data.success) {
				
					this.proxy_list[key].status = to
				
				}else{
				
					this.$Notice.error({title:data['msg']})
				}
			})
		}
	}
}
</script>
<style lang="scss" scoped>
.zone-frame{
	background-color: #ffffff;
	padding: 10px;
	.info-frame{
		margin-top: 20px;
		.info-item{
			width: 150px;
			margin-right: 20px;
		}
	}
	.list-item{
		padding: 10px;
		border-bottom: 1px solid #f7f7f7;
		.host{
			width: 20%;
		}
		.port{
			width: 10%;
		}
		.pasd{
			width: 10%;
		}
		.name{
			width: 20%;
		}
		.time{
			width: 10%;
		}
		.status{
			width: 10%;
		}
		.action{
			width: 20%;
		}
	}
}
</style>