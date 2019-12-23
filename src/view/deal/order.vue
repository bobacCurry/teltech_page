<template>
<div class="deal-order">
	<ul class="flex-start-center">
		<li class="order-item-frame" v-for="(item,key) in orderList" :key="key">
			<Card class="order-item">
	          	<div class="item-info">订单号： {{item._id}}</div>
	          	<div class="item-info">服务类型： {{serviceType[item.type]}}</div>
	          	<div class="item-info" v-if="item.status==0">购买天数： {{item.days}} 天 </div>
	          	<div class="item-info" v-if="item.status==1">购买个数： {{item.nums}} 个</div>
	          	<div class="item-info">订单状态： {{item.status==1?'已完成':'未完成'}}</div>
	          	<div class="item-info">订单备注： {{item.memo}}</div>
	        </Card>
		</li>
	</ul>	
</div>	
</template>
<script>
import {getUserOrder} from '@/api/order'
import {serviceType} from '@/config/client'
export default{
	mounted(){
		this.getOrder()
	},
	data(){
		return {
			orderList:[],
			serviceType,
			params:{
				page:1,
				status:''
			}
		}
	},
	methods:{
		getOrder(){
			getUserOrder(this.params).then((r)=>{
				if (r.data.success) {
					this.orderList = r.data.msg
				}
			})
		}
	}
}
</script>
<style lang="scss" scoped>
.deal-order{
	.order-item-frame{
		width: 25%;
		.order-item{
			height: 200px;
			.item-info{
				margin-top: 10px;
			}
		}
	}
}	
</style>