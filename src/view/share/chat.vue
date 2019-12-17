<template>
	<div class="service-chat">
		<div class="flex-start-center ">
			<Select v-model="type" style="width:200px" placeholder="群类型">
		        <Option v-for="(item,key) in chatType" :value="key" :key="key">{{ item }}</Option>
		    </Select>
			<Input v-model="chatid" placeholder="群名称或群链接" style="width: 300px;margin-left: 20px"/>
			<Button type="primary" style="margin-left: 20px">提交群信息</Button>
		</div>
		<div>
			
		</div>
	</div>
</template>
<script>
import {chatType} from '@/config/client'
export default {
	data(){
		return {
			chatType,
			chatid:'',
			type:''
		}
	},
	filters: {

	},
	mounted(){

	},
	methods:{
		getUserChat(){

		},
		addChat(){

		}
	}
}	
</script>
<style lang="scss" scoped>
	
</style>