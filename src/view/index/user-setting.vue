<template>
	<div class="user-setting">
		<div class="flex-start-top info-frame">
			<div class="user-info">
				<p class="title"><b>用户基本信息</b></p>
				<div class="flex-between-center info-item">
					<div class="label">用户名：</div>
					<div class="text">{{user.userName}}</div>
				</div>
				<div class="flex-between-center info-item">
					<div class="label">金币数：</div>
					<div class="text" style="color: red">{{user.money}}</div>
				</div>
			</div>
			<div class="reset">
				<p class="title"><b>用户密码重置</b></p>
				<div class="flex-between-center info-item">
					<div class="label">原密码：</div>
					<div class="text"><Input type='password' v-model="reset.old_password" placeholder='请输入原密码'/></div>
				</div>
				<div class="flex-between-center info-item">
					<div class="label">新密码：</div>
					<div class="text"><Input type='password' v-model="reset.new_password" placeholder='请输入新密码'/></div>
				</div>
				<div class="flex-between-center info-item">
					<div class="label">密码确认：</div>
					<div class="text"><Input type='password' v-model="reset.cfm_password" placeholder='请确认新密码'/></div>
				</div>
				<div class="flex-between-center info-item">
					<div class="label"></div>
					<div class="text"><Button type="primary" @click="resetPassword">确认修改</Button></div>
				</div>
			</div>
		</div>
		<Modal v-model="show" title="充值金额" @on-ok="recharge">
	        <div class="order-info">
	        	<Input placeholder="请输入充值金币数量：1RMB=10金币" v-model="order.money" type="number"/>
	        </div>
	        <div class="order-info"><Input v-model="order.memo" placeholder='订单备注'/></div>
	    </Modal>
	</div>
</template>
<script>
import {getTime} from '@/libs/tools'
import {resetPassword} from '@/api/user'
export default{
	filters:{
		getDate(e){
			return getTime(e,'year')
		}
	},
	data(){
		return {
			reset:{
				old_password:'',
				new_password:'',
				cfm_password:''
			},
			order:{
				money:'',
				memo:''
			},
			show:false
		}
	},
	computed:{
		user(){
			return this.$store.state.user
		}
	},
	methods:{
		resetPassword(){
			if (!this.reset.old_password.trim()||!this.reset.new_password.trim()||!this.reset.cfm_password.trim()) {
				return this.$Notice.error({title:"重置信息不完善"})
			}
			if (this.reset.new_password!==this.reset.cfm_password) {
				return this.$Notice.error({title:"新密码与确认密码不正确"})
			}
			resetPassword(this.reset).then((r)=>{
				this.$Notice.success({title:r.data.msg})
			}).catch((e)=>{
				this.$Notice.error({title:e.response.data.msg})
			})
		},
		recharge(){
			if (!this.order.money) {
				return this.$Notice.success({title:'请填写充值金额'})
			}
			if (!this.order.memo) {
				return this.$Notice.success({title:'请填写充值备注'})
			}
			
		}
	}
}	
</script>
<style lang="scss" scoped>
.user-setting{
	.info-frame{
		width: 100%;
		min-height: 500px;
		background-color: #ffffff;
		.user-info,.reset{
			height: 100%;
			width: 50%;
			padding: 20px;
			.title{
				font-size: 16px;
			}
			.info-item{
				font-size: 14px;
				margin-top: 20px;
				.label{
					width: 20%;
					text-align: right;
				}
				.text{
					width: 75%;
				}
			}
		}
		.user-info{
		}
		.reset{
			border-left: 1px solid #f7f7f7;
		}
	}
}
.order-info{
	margin-bottom: 20px;
}
</style>