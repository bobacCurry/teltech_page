<template>
	<div>
		<ul class="flex-start-center">
			<li><Input v-model="target" style="width:300px" placeholder="群名称（将人拉入该群）"/></li>
			&nbsp;&nbsp;&nbsp;
			<li><Select v-model="phone" style="width:300px" placeholder="选择TG账号">
			        <Option v-for="(item,key) in phoneList" :value="item.phone" :key="key">{{ item.phone }}</Option>
			    </Select>
			</li>
			&nbsp;&nbsp;&nbsp;
			<li><Button type="primary" @click="add()" :disabled="loading">创建拉人服务</Button></li>
		</ul>
		<ul class="flex-start-top service-frame">
			<li class="service-item-frame">
				<div>目标群</div>
				<div>发送配置</div>
				<div>可发用户</div>
			</li>
			<li class="service-item-frame">
				2222
			</li>
			<li class="service-item-frame">
				3333
			</li>
			<li class="service-item-frame">
				4444
			</li>
		</ul>
		<div>
			
		</div>	
	</div>
</template>
<script>
	export default{
		data(){
			return {
				target:'',
				phone:'',
				phoneList:[],
				loading:false
			}
		}
	}
</script>
<style lang="scss" scoped>
.service-frame{
	min-height: 600px;
}
.service-item-frame{
	width: 25%;
	.service-item{
		height: 280px;
		.item-info{
			margin-top: 10px;
		}
	}
}
</style>