<template>
<div class="admin-order">
	<div class="flex-start-center option-frame">
		<Select v-model="params.status" style="width:200px" placeholder="审核状态" @on-change="getOrder">
	        <Option v-for="(item,key) in status" :value="key" :key="key">{{ item }}</Option>
	    </Select>
	</div>
	<ul class="flex-start-center">
		<li class="order-item-frame" v-for="(item,key) in orderList" :key="key">
			<Card class="order-item">
	          	<div class="item-info">订单号： {{item._id}}</div>
	          	<div class="item-info">服务类型： {{serviceType[item.type]}}</div>
	          	<div class="item-info" v-if="item.type==0">购买天数： {{item.days}} 天 </div>
	          	<div class="item-info" v-if="item.type==1">购买个数： {{item.nums}} 个</div>
	          	<div class="item-info">订单状态： {{item.status==1?'已完成':'未完成'}}</div>
	          	<div class="item-info">订单备注： {{item.memo}}</div>
	          	<div class="item-info">订单时间： {{item.created_at|getData}}</div>
	          	<div class="item-info">
	          		<Button v-if="item.status==0" type="primary" @click="startOrder(item._id)">通过审核</Button>
	          		&nbsp;
	          		<Button v-if="item.status==0" type="error" @click="delOrder(item._id)">拒绝通过</Button>
	          		<span v-if="item.status==1" style="color: red">审核已通过</span>
	          	</div>
	        </Card>
		</li>
	</ul>	
	<div class="option-frame">
		<Page :total="10000" simple @on-change="changePage"/>
	</div>
</div>	
</template>
<script>
import {getOrder,startOrder,delOrder} from '@/api/order'
import {serviceType} from '@/config/client'
export default{
	mounted(){
		this.getOrder()
	},
	data(){
		return {
			status:['待审核','审核通过'],
			orderList:[],
			serviceType,
			params:{
				page:1,
				status:0
			}
		}
	},
	filters:{
		getData(val){
			
			let year = new Date(val).getFullYear()

			let month = new Date(val).getMonth() + 1

			let day = new Date(val).getDate()

			return year + '-' + month + '-' + day
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
		},
		delOrder(_id){
			this.$Modal.confirm({
                title: '拒绝通过',
                content: '拒绝通过该审核',
                onOk: () => {
                    delOrder(_id).then((r)=>{
						if (r.data.success) {
							this.$Notice.success({title:r.data.msg})
							this.getOrder(this.paramsz)
						}else{
							this.$Notice.error({title:r.data.msg})
						}
					})
                }
            });
		},
		changePage(e){
			this.params.page=e
			this.getOrder()
		}
	}
}
</script>
<style lang="scss" scoped>
.admin-order{
	.order-item-frame{
		width: 25%;
		.order-item{
			height: 260px;
			.item-info{
				margin-top: 10px;
			}
		}
	}
	.option-frame{
		padding: 20px 0;
	}
}	
</style>