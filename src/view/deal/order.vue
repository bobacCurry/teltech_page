<template>
<div class="deal-order">
	<ul class="flex-start-center">
		<li class="order-item-frame" v-for="(item,key) in orderList" :key="key">
			<Card class="order-item">
	          	<div class="item-info">订单号： {{item._id}}</div>
	          	<div class="item-info">服务类型： {{serviceType[item.type]}}</div>
	          	<div class="item-info" v-if="item.type==0">购买天数： {{item.days}} 天 </div>
	          	<div class="item-info" v-if="item.type==1">购买个数： {{item.nums}} 个</div>
	          	<div class="item-info">订单状态： {{item.status==1?'已完成':'未完成'}}</div>
	          	<div class="item-info">订单备注： {{item.memo}}</div>
	          	<div class="item-info">创建时间： {{item.created_at|getData}}</div>
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
	filters:{
		getData(val){
			
			let year = new Date(val).getFullYear()

			let month = new Date(val).getMonth() + 1

			let day = new Date(val).getDate()

			return year + '-' + month + '-' + day
		}
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
			height: 220px;
			.item-info{
				margin-top: 10px;
			}
		}
	}
}	
</style>