<template>
<div class="service-add">
	<div class="zone-frame">
		<h2>新增拉人服务</h2>
		<div class="add-user flex-start-center">
			<div class="info-item">
				<Input v-model="target" placeholder="群名称（将人拉入该群）"/>
			</div>
			&nbsp;
			<div class="info-item">
				<Select v-model="phone" style="width:200px" placeholder="选择TG账号">
			        <Option v-for="(item,key) in clientList" :value="item.phone" :key="key">{{ item.phone }}</Option>
			    </Select>
			</div>
			&nbsp;
			<div class="info-item">
				<Button type="primary" @click="add()" :disabled="loading">创建拉人服务</Button>
			</div>
		</div>
	</div>
	<div class="zone-frame">
		<h2>拉人服务列表</h2>
		<div class="add-user flex-start-center">
			<Card class="add-item" v-for="(item,key) in addList" :key="key">
				<div>
					<div class="add-item-title">拉人的目标群 :  {{item.target}}</div>
					<div class="add-item-button">
						<Button :type="!item.status?'primary':'info'" @click="AddRun(item._id,item.status?0:1,key)">{{item.status?'停止服务':'开启服务'}}</Button>
						&nbsp;&nbsp;&nbsp;
			            <Button type="warning" :disabled="loading" @click="DelChatUser(key)">删除服务</Button>
					</div>
				</div>
		        <Collapse v-model="panel">
			        <!-- <Panel :name="'1'+key">
			        	拉人的目标群
			           	<p slot="content">{{item.target}}</p>
			        </Panel> -->
			        <Panel :name="'2'+key">
			            拉人的telegram号
			            <div slot="content">
			            	<div class="flex-start-center">
			            		<Select v-model="addPhone" style="width:50%" placeholder="选择TG账号">
							        <Option v-for="(client,key) in clientList" :value="client.phone" :key="key" v-if="item.phone.indexOf(client.phone)===-1">{{ client.phone }}</Option>
							    </Select>
							    &nbsp;
							    <Button type="primary" :disabled="loading" @click="addPhonePost(addPhone,item._id)">添加拉人号</Button>
							</div>
							<div style="margin-top: 10px">
				            	<Tag color="primary" v-for="(item1,key1) in item.phone" closable @on-close="delPhone(item._id,item1,key)">{{item1}}</Tag>
				            </div>
			            </div>
			        </Panel>
			        <Panel :name="'3'+key">
			            从下列群拉人
			            <div slot="content">
			            	<div class="flex-start-center">
			            		<Input v-model="addChat" placeholder="群名称（从该群中拉人）" style="width: 50%"/>
			            		&nbsp;
			            		<Button type="primary" :disabled="loading" @click="AddChatUser(addChat,item._id)">添加群</Button>
			            	</div>
			            	<div style="margin-top: 10px">
				            	<Tag color="primary" v-for="(item,key) in item.chatids">{{item}}</Tag>
				            </div>
			            </div>
			        </Panel>
			        <Panel :name="'4'+key">
			            需要拉的用户数量
			            <p slot="content">{{item.uids}} 个</p>
			        </Panel>
			        <Panel :name="'5'+key">
			            拉入成功的数量
			            <p slot="content">{{item.success}} 个</p>
			        </Panel>
			        <Panel :name="'6'+key">
			            拉入失败的数量
			            <p slot="content">{{item.fail}} 个</p>
			        </Panel>
			    </Collapse>
		    </Card>
		</div>
	</div>
</div>
</template>
<script>
import {getUserClient} from '@/api/share'
import {NewChatUser,GetChatUser,AddChatPhone,AddChatUser,AddRun,DelChatUser,DelChatPhone} from '@/api/group'
export default{
	data(){
		return {
			clientList: [],
			phone:'',
			target:'',
			panel:'1',
			addList:[],
			addPhone:'',
			addChat:'',
			loading:false
		}
	},
	mounted(){
		this.getChatUser()

		this.getUserClient()	
	},
	methods:{
		add(){

			if (!this.target.trim()) {
			
				return this.$Notice.error({title:'目标群群名称不得为空'})
			}

			if (!this.phone) {
			
				return this.$Notice.error({title:'请选择一个tg账号'})
			}
			
			this.target = this.target.replace('https://t.me/','')

			this.target = this.target.replace('@','')

			this.loading = true

			NewChatUser(this.phone,this.target).then(({data})=>{

				if (data.success) {
				
					this.$Notice.success({title:data.msg})
				
				}else{
				
					this.$Notice.error({title:data.msg})
				}

				this.phone = ''

				this.target = ''

				this.loading = false

				this.getChatUser()				
			})	
		},
		getChatUser(){
			GetChatUser().then(({data})=>{
		
				this.addList = data.msg
			})
		},
		getUserClient(){
			getUserClient().then(({data})=>{

				this.clientList = data.msg
			
			})
		},
		addPhonePost(phone,_id){

			if (!phone) {

				return this.$Notice.error({title:'电话号不得为空'})
			}

			if (!_id) {

				return this.$Notice.error({title:'服务不得为空'})
			}

			this.loading = true

			AddChatPhone(phone,_id).then(({data})=>{

				if (data.success) {

					this.$Notice.success({title:data.msg})					
				
					this.addPhone = ''

					this.getChatUser()

				}else{
				
					this.$Notice.error({title:data.msg})
				}

				this.loading = false		
			})
		},
		AddChatUser(chatid,_id){

			chatid = chatid.replace('https://t.me/','')

			chatid = chatid.replace('@','')

			if (!chatid) {

				return this.$Notice.error({title:'群名称不得为空'})
			}

			if (!_id) {

				return this.$Notice.error({title:'服务不得为空'})
			}

			this.loading = true

			AddChatUser(chatid,_id).then(({data})=>{

				if (data.success) {

					this.$Notice.success({title:data.msg})					
				
					this.addChat = ''

					this.getChatUser()

				}else{
				
					this.$Notice.error({title:data.msg})
				}

				this.loading = false				
			})
		},
		AddRun(_id,status,key){

			AddRun(_id,status).then(({data})=>{
				
				if (!data.success) {

					return this.$Notice.error({title:data.msg})
				}

				this.addList[key].status = status

				this.$Notice.success({title:'设置成功'})

			})
		},
		delPhone(_id,phone,key){
			
			DelChatPhone(_id,phone).then(({data})=>{
				
				if (!data.success) {
				
					return this.$Notice.error({title:'删除失败'})
				}

				this.addList[key].phone = this.addList[key].phone.filter((item)=>{

					if (phone === item) return false

					return true
				})
				
				return this.$Notice.success({title:'删除成功'})
			})
		},
		DelChatUser(key){

			this.$Modal.confirm({

                title: '删除该服务',

                content: '确认删除该服务',

                onOk: () => {

					DelChatUser(this.addList[key]._id).then(({data})=>{

						if (!data.success) {

							return this.$Notice.error({title:'删除失败'})

						}

						this.addList = this.addList.filter((item1,key1)=>{

							if (key === key1) return false

							return true
						})

						return this.$Notice.success({title:'删除成功'})

					})
                }
            })
		}
	}
}
</script>
<style lang='scss' scoped>
.service-add{
	.zone-frame{
		background-color: #ffffff;
		padding: 10px;
		.add-user{
			margin-top: 20px;
			.add-item{
				width: 45%;
				margin-right: 5%;
				.add-item-title{
					padding: 10px;
					width: 70%;
				}
				.add-item-button{
					padding: 10px;
				}
			}
		}
	}
}
</style>