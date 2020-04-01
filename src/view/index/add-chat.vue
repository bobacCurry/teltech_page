<template>
	<div class="admin-add-chat">
		<div class="zone-frame">
			<h2>配置加群信息</h2>
			<div class="flex-start-center option-frame">
				<div class="option-item">
					<Select v-model="type" style="width:200px" placeholder="广告业务类型" @on-change="changeChatType">
				        <Option v-for="(item,key) in this.chatType" :value="key" :key="key">{{ item }}</Option>
				    </Select>
				</div>
				<div class="option-item">
					<Select v-model="params.phone" style="width:200px" placeholder="选择TG实例">
				        <Option v-for="(item,key) in this.clientList" :value="item.phone" :key="key">{{ item.phone }}</Option>
				    </Select>
				</div>
				<div class="info-item">
					<Checkbox @on-change="checkAll">全选</Checkbox>
				</div>
				<div class="option-item">
					<Button type='primary' @click="addChat" :disabled="loading">创建自动加群订单</Button>
				</div>
			</div>
			<div class="flex-start-center option-frame">
				<CheckboxGroup v-model="params.chatids">
			        <Checkbox :label="item.chatid" v-for="(item,key) in chatList" :key="key" :disabled="item.auth?true:false">
			            <span class="check-item">{{item.chatid}} <label v-if="item.auth" style="color:red">(需验证)</label></span>
			        </Checkbox>
			    </CheckboxGroup>
			</div>
		</div>
		<div class="zone-frame">
			<h2>加群订单列表</h2>
			<div class="add-chat-list flex-between-top">
				<div class="add-chat-item" v-for="(item,key) in orderList" :key="key">
					<div class="title">
						TG账号：{{item.phone}}
					</div>
					<div class="status">
						状态：
						<span v-if="item.status===0" style="color: green">执行中</span>
						<span v-if="item.status===1" style="color: blue">执行完毕</span>
						<span v-if="item.status===-1" style="color: red">执行失败</span>
						&nbsp;&nbsp;
						<Button type="primary" size="small" v-if="item.status===1" @click="updateAddChat(item._id,key)">启动服务</Button>
						&nbsp;&nbsp;
						<Button type="primary" size="small" @click="delAddChat(item._id,key)">删除服务</Button>
					</div>
					<Collapse>
				        <Panel name="1">
				            等待加入的群
				            <p slot="content">
				            	<Tag color="primary" v-for="(item1,key) in item.chatids" :key="key">{{item1}}</Tag>
				            </p>
				        </Panel>
				        <Panel name="2">
				            加入成功
				            <p slot="content">
				            	<Tag color="primary" v-for="(item1,key) in item.success" :key="key">{{item1}}</Tag>
				            </p>
				        </Panel>
				        <Panel name="3">
				            加入失败
				            <p slot="content">
				            	<Tag color="primary" v-for="(item1,key) in item.fail" :key="key">{{item1}}</Tag>
				            </p>
				        </Panel>
				        <Panel name="4">
				            加群信息
				            <p slot="content">
				            	{{item.msg}}
				        	</p>
				        </Panel>
				    </Collapse>
				</div>
			</div>
			<Page :page-size="50" :total="5000" simple @on-change="getAddChat"/>
		</div>
	</div>
</template>
<script>
import {chatType} from '@/config/client'
import {getUserClient} from '@/api/share'
import {getChat} from '@/api/share'
import {addChat,delAddChat,updateAddChat} from '@/api/service'
import {getAddChat} from '@/api/client'
export default{
	mounted(){
		this.getClient()
		this.getChat()
		this.getAddChat(1)
	},
	data(){
		return {
			chatType,
			clientList:[],
			chatList:[],
			type:0,
			params:{
				chatids:[],
				phone:''
			},
			orderList:[],
			loading:false
		}
	},
	methods:{
		getClient () {
	      getUserClient().then((r)=>{
	        if (r.data.success) {
	          this.clientList = r.data.msg
	        }
	      })
	    },
		getChat(){
			getChat(this.type).then((r)=>{
				if (r.data.success) {
					this.chatList = r.data.msg
				}
			})
		},
		changeChatType(e){
			this.type = e
			this.getChat()
		},
		addChat(){
			if (!this.params.phone.trim()) {
				return this.$Notice.error({title:'请选择要加群的TG账号'})
			}
			if (!this.params.chatids.length) {
				return this.$Notice.error({title:'请选择要自动加的群'})
			}
			this.loading = true
			addChat(this.params).then(({data})=>{
				if (data.success) {
					this.$Notice.success({title:data.msg})
					this.getAddChat(1)
				}else{
					this.$Notice.error({title:data.msg})
				}
			}).catch(({response})=>{
				this.$Notice.error({title:response.data.msg})
			}).finally(()=>{
				this.loading = false
			})
		},
		getAddChat(page){
			getAddChat(page).then(({data})=>{
				if (data.success) {
					this.orderList = data.msg
				}else{
					this.$Notice.error({title:data.msg})
				}
			}).catch(({response})=>{
				this.$Notice.error({title:response.data.msg})
			})
		},
		checkAll(e){
			if (e) {
				this.params.chatids = []
				for (var i = this.chatList.length - 1; i >= 0; i--) {
					if (!this.chatList[i].auth) {
						this.params.chatids.push(this.chatList[i].chatid)
					}
				}
			}else{
				this.params.chatids = []
			}
		},
		delAddChat(_id,key){

			this.$Modal.confirm({
                
                title: '确认删除',
                
                content: '确认删除该单',
                
                onOk: () => {
                    
                    delAddChat(_id).then(({data})=>{
					
						if (data.success) {
					
							this.orderList.splice(key)
					
						}else{
					
							this.$Notice.error({title:data['msg']})
						}
					})
                }
            })
		},
		updateAddChat(_id,key){
			updateAddChat(_id).then(({data})=>{
				if (data.success) {
					this.orderList[key].status = 0
				}else{
					this.$Notice.error({title:data['msg']})
				}
			})
		}
	}
}	
</script>
<style lang="scss" scoped>
.admin-add-chat{
	.zone-frame{
		background: #ffffff;
		padding: 10px;
		margin-bottom: 10px;
		.option-frame{
			margin-bottom: 20px;
			.option-item{
				margin-right: 10px;
			}
			.check-item{
				display: inline-block;
				min-width: 100px;
			}
		}
		.add-chat-list{
			min-height: 500px;
			.add-chat-item{
				.title,.status{
					padding: 10px;
				}
				width: 49%;
				margin-bottom: 10px;
				background: #f7f7f7;
				border-radius: 3px;
				font-size: 14px;
			}
		}
	}
}
</style>