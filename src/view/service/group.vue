<template>
	<div class="service-group">
		<div class="flex-between-center title">
			<h2>创建服务订单</h2>
			<div><Button type="primary">创建订单</Button></div>
		</div>
		<div class="content">
			<div class="flex-start-center">
				<div class="option-item">
					<Select v-model="type" style="width:200px" placeholder="广告类型" @on-change="changeType">
						<Option :value="''" :key="-1">不限</Option>
				        <Option v-for="(item,key) in this.chatType" :value="key" :key="key">{{ item }}</Option>
				    </Select>
				</div>
				<div class="option-item">
					<Select v-model="type" style="width:200px" placeholder="广告文本" @on-change="changeType">
						<Option :value="''" :key="-1">不限</Option>
				        <Option v-for="(item,key) in this.chatType" :value="key" :key="key">{{ item }}</Option>
				    </Select>
				</div>
				<div class="option-item">
					<Select v-model="type" style="width:200px" placeholder="选择实例" @on-change="changeType">
						<Option :value="''" :key="-1">不限</Option>
				        <Option v-for="(item,key) in this.chatType" :value="key" :key="key">{{ item }}</Option>
				    </Select>
				</div>
			</div>
			<div>
				
			</div>
		</div>
	</div>
</template>
<script>
import {chatType} from '@/config/client'
export default{
	mounted(){
		
	},
	data(){
		return {
			chatType,
			clientList:[],
			type:''
		}
	},
	methods:{
		changeType(){

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
		.option-item{
			margin-right: 10px;
		}
	}
}	
</style>