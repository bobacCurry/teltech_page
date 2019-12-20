<template>
	<div class="service-group">
		<div class="flex-between-center title">
			<h2>创建服务订单</h2>
			<div><Button type="primary">创建订单</Button></div>
		</div>
		<div class="flex-start-center content">
			
		</div>
	</div>
</template>
<script>
export default{
	mounted(){
		console.log(1111)
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
	}
}	
</style>