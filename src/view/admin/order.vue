<template>
<div class="admin-order">
	<ul class="flex-start-center">
		<li class="order-item-frame" v-for="(item,key) in orderList" :key="key">
			<Card class="order-item">
	          	<div class="item-info">订单号： {{item._id}}</div>
	          	<div class="item-info">服务类型： {{serviceType[item.type]}}</div>
	          	<div class="item-info" v-if="item.type==0">购买天数： {{item.days}} 天 </div>
	          	<div class="item-info" v-if="item.type==1">购买个数： {{item.nums}} 个</div>
	          	<div class="item-info">订单状态： {{item.status==1?'已完成':'未完成'}}</div>
	          	<div class="item-info">订单备注： {{item.memo}}</div>
	          	<div class="item-info">
	          		<Button v-if="item.status==0" type="primary" @click="startOrder(item._id)">通过审核</Button>
	          		<span v-if="item.status==1" style="color: red">审核已通过</span>
	          	</div>
	        </Card>
		</li>
	</ul>	
</div>	
</template>
<script>
import {getOrder,startOrder} from '@/api/order'
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
			getOrder(this.params).then((r)=>{
				if (r.data.success) {
					this.orderList = r.data.msg
				}
			})
		},
		startOrder(_id){
			startOrder(_id).then((r)=>{
				if (r.data.success) {
					this.$Notice.success({title:r.data.msg})
					this.getOrder(this.paramsz)
				}else{
					this.$Notice.error({title:r.data.msg})
				}
			})
		}
	}
}
</script>
<style lang="scss" scoped>
.admin-order{
	.order-item-frame{
		width: 25%;
		.order-item{
			height: 230px;
			.item-info{
				margin-top: 10px;
			}
		}
	}
}	
</style>