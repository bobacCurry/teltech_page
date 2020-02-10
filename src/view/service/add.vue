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
		<h2>新增拉人服务</h2>
		<div class="add-user flex-start-center">
			<Card class="add-item" v-for="(item,key) in addList" :key="key">
		        <Collapse v-model="panel">
			        <Panel :name="`${key}-1`">
			        	拉人的目标群
			           	<p slot="content">{{item.target}}</p>
			        </Panel>
			        <Panel  :name="`${key}-2`">
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
				            	<Tag color="primary" v-for="(item,key) in item.phone">{{item}}</Tag>
				            </div>
			            </div>
			        </Panel>
			        <Panel :name="`${key}-3`">
			            从下列群拉人
			            <div slot="content">
			            	<div class="flex-start-center">
			            		<Input v-model="addChat" placeholder="群名称（将人拉入该群）" style="width: 50%"/>
			            		&nbsp;
			            		<Button type="primary" :disabled="loading" @click="AddChatUser(addChat,item._id)">添加群</Button>
			            	</div>
			            	<div style="margin-top: 10px">
				            	<Tag color="primary" v-for="(item,key) in item.chatids">{{item}}</Tag>
				            </div>
			            </div>
			        </Panel>
			        <Panel :name="`${key}-4`">
			            需要拉的用户数量
			            <p slot="content">{{item.uids.length}} 个</p>
			        </Panel>
			        <Panel :name="`${key}-5`">
			            拉入成功的数量
			            <p slot="content">{{item.success.length}} 个</p>
			        </Panel>
			        <Panel :name="`${key}-6`">
			            拉入失败的数量
			            <p slot="content">{{item.fail.length}} 个</p>
			        </Panel>
			        <Panel :name="`${key}-7`">
			            拉人状态
			            <p slot="content">{{item.status?'已拉完！':'正在拉。。。'}}</p>
			        </Panel>
			    </Collapse>
		    </Card>
		</div>
	</div>
</div>
</template>
<script>
import {getUserClient} from '@/api/share'
import {NewChatUser,GetChatUser,AddChatPhone,AddChatUser} from '@/api/group'
export default{
	data(){
		return {
			clientList: [],
			phone:'',
			target:'',
			panel:'',
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
			}
		}
	}
}	
</style>