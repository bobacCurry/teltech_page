<template>
	<div class="deal-service">
		<ul class="flex-start-top service-frame">
			<li class="service-item-frame" v-for="(item,key) in serviceList" :key="key">
				<Card class="service-item">
		          	<div class="item-info">TG实例： {{item.phone}} </div>
		          	<div class="item-info">服务备注： {{item.title}} </div>
		          	<div class="item-info">服务类型： {{chatType[item.chat_type]}}</div>
		          	<div class="item-info">文本类型： {{textType[item.text_type]}}</div>
		          	<div class="item-info">发送时间： {{item.minute.join('、')}} 分</div>
		          	<div class="item-info">开启状态： 
		          		<span v-if="item.status==1" style="color: green">已开启</span><span v-else style="color: red">未开启</span>（<a @click="changeStatus(item._id,key)">{{item.status==1?'点击关闭':'点击开启'}}</a>）
		          	</div>
		          	<div class="item-info">
		          		到期时间： 
		          		<span v-if="item.expire">{{item.expire|expire}}<a @click="order.pid=item._id;show=true">（续时）</a></span>
		          		<span v-else>未购买<a @click="order.pid=item._id;show=true">（点击下单）</a></span>
		          	</div>
		          	<div class="item-info flex-between-center">
		          		<a @click="$router.push('/deal/service-detail/'+item._id)">查看服务详情</a>
		          		<a @click="delPush(item._id)">删除服务</a>
		          	</div>
		        </Card>
			</li>
		</ul>
		<Page :page-size="50" :total="5000" simple @on-change="getService"/>
		<Modal v-model="show" title="创建订单" @on-ok="addOrder" @on-cancel="cancel">
	        <div class="order-info">
	        	<Select v-model="order.days" style="width:200px" placeholder="购买的天数">
			        <Option v-for="(item,key) in this.groupFee" :value="item.days" :key="key">{{ item.days }} 天（{{item.fee}}元）</Option>
			    </Select>
	        </div>
	        <div class="order-info"><Input v-model="order.memo" placeholder='订单备注'/></div>
	    </Modal>
	</div>
</template>
<script>
import {getPush,changeStatus,delPush} from '@/api/service'
import {addGroupOrder} from '@/api/order'
import {chatType,textType} from '@/config/client'
import {groupFee} from '@/config/order'
export default{
	mounted(){
		this.getService(1)
	},
	filters:{
		expire(e){

			let date = new Date(e)

			let year = date.getFullYear()

			let month = date.getMonth() + 1

			let day = date.getDate()

			return  year + '-' + month + '-' + day
		}
	},
	data(){
		return {
			serviceList:[],
			chatType,
			textType,
			groupFee,
			order:{
				pid:'',
				days:'',
				memo:''
			},
			show:false
		}
	},
	methods:{
		getService(page){
			getPush(page).then((r)=>{
				if (r.data.success) {
					this.serviceList = r.data.msg
				}
			})
		},
		addOrder(){

			if (!this.order.pid) {

				return this.$Notice.error({title:'服务数据有误'})
			
			}

			if (!String(this.order.days)) {

				return this.$Notice.error({title:'请选择购买天数'})
			
			}

			if (!this.order.memo.trim()) {

				return this.$Notice.error({title:'请填写备注（你的名字）'})
			}

			addGroupOrder(this.order).then((r)=>{

				if (r.data.success) {

					this.$router.push('/deal/order')

					return this.$Notice.success({title:r.data.msg})

				}else{

					return this.$Notice.error({title:r.data.msg})
				}
			})
		},
		cancel(){
			this.order.pid = ''
		},
		changeStatus(_id,key){
			changeStatus(_id).then((r)=>{
				
				if (!r.data.success) {
				
					return this.$Notice.error({title:r.data.msg})
				
				}else{

					this.serviceList[key].status = !this.serviceList[key].status

					return this.$Notice.success({title:r.data.msg})
				}
			})
		},
		delPush(_id){
			this.$Modal.confirm({
		        title: '是否删除该服务？',
		        content: '是否删除该服务？',
		        onOk: () => {
		          	delPush(_id).then(({data})=>{
			            if (data.success) {
			              this.getService()
			              return this.$Notice.success({title:data.msg})
			            }else{
			              return this.$Notice.error({title:'解除错误',desc:data.msg})
			            }
		          	})
		        }
		    })
		}
	}
}	
</script>
<style lang="scss" scoped>
.deal-service{
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
}
.order-info{
	margin-top: 20px;
	height: 50px;
}
</style>