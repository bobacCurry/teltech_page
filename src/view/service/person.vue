<template>
	<div>
		<Col class="demo-spin-col" span="18" v-if="loading">
            <Spin fix>
                <Icon type="ios-loading" size=60 class="demo-spin-icon-load"></Icon>
                <div>执行中...</div>
            </Spin>
        </Col>
		<h2>添加私发配置</h2><br>
		<ul class="flex-start-top">
			<li><Input v-model="new_person.target" style="width:200px" placeholder="群名称（将人拉入该群）"/></li>
			&nbsp;&nbsp;&nbsp;
			<li><Input v-model="new_person.text" type="textarea" style="width:300px" placeholder="私发内容"/></li>
			&nbsp;&nbsp;&nbsp;
<!-- 			<li><Checkbox v-model="new_person.no_admin">不向群管理发送</Checkbox></li>
			&nbsp;&nbsp;&nbsp; -->
			<li><Button type="primary" @click="addPerson" :disabled="loading">创建私发服务</Button></li>
		</ul>
		<Divider/>
		<h2>私发配置列表</h2>
		<div>
			<ul class="flex-start-top">
				<li class="service-item-frame" v-for="(item,key) in person_list" :key="key">
					<Collapse>
				        <Panel name="目标群">
				            目标群
				            <div slot="content">
				            	<div class="flex-start-center">
					            	<div style="font-size: 14px">
					            		群名称：<a :href="`https://t.me/${item.target}`" target="blank">{{item.target}}</a>
					            	</div>
					            	&nbsp;&nbsp;&nbsp;
					            	<div><Button type="error" size="small" @click="delPerson(item._id)">删除服务</Button></div>
					            </div>
				            </div>
				        </Panel>
				        <Panel name="私发内容">
				            私发内容
				            <div slot="content">
				            	{{item.text}}
				            </div>
				        </Panel>
				        <!-- <Panel name="发送配置">
				            发送配置
				            <div slot="content">
				            	<p>向群管理发送: <b style="color: red">{{item.no_admin?'是':'否'}}</b></p>
				            </div>
				        </Panel> -->
				        <Panel name="待发送的用户">
				            待发送的用户
				            <div slot="content">
				            	<Tag color="primary" v-for="(item,key) in item.send_list">{{item}}</Tag>
				            </div>
				        </Panel>
				        <Panel name="已发送的用户">
				            已发送的用户
				            <div slot="content">
				            	<Tag color="primary" v-for="(item,key) in item.sended_list">{{item}}</Tag>
				            </div>
				        </Panel>
				        <Panel name="可发用户">
				            飞机号列表
				            <div slot="content">
				            	<ul>
				            		<li v-for="(phone,key1) in item.phone_list" :key="key1" class="flex-start-center phone-item-frame">
				            			<div class="phone-item">{{phone}}</div>
				            			&nbsp;&nbsp;&nbsp;
				            			<div><Button type="primary" size="small" @click="sendMessage(item._id,phone)" :disabled="loading">执行发送</Button></div>
				            			&nbsp;&nbsp;&nbsp;
				            			<div><Button type="error" size="small" @click="delPersonPhone(item._id,phone,key)">删除TG</Button></div>
				            		</li>
				            		<li class="flex-start-center phone-item-frame">
				            			<div class="phone-item">
				            				<Select style="width:200px" placeholder="选择TG实例" v-model="new_phone">
										        <Option v-for="(client,key) in client_list" :key="key" :value="client.phone">{{ client.phone }}</Option>
										    </Select>
				            			</div>
				            			&nbsp;&nbsp;&nbsp;
				            			<div><Button type="primary" size="small" @click="addPersonPhone(item._id,key)"  :disabled="loading">绑定TG</Button></div>
				            		</li>
				            	</ul>
				            </div>
				        </Panel>
				    </Collapse>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import { getNomal } from '@/api/client'
	import { addPerson, getPerson, delPerson, addPersonPhone, delPersonPhone, sendMessage } from '@/api/person'
	export default{
		data(){
			return {
				new_person:{
					target:'',
					text:'',
					no_admin:true
				},
				person_list:[],
				new_phone:'',
				client_list:[],
				loading:false
			}
		},
		mounted(){
			
			this.getNomal()

			this.getPerson()
		},
		methods:{
			getNomal() {

			    getNomal().then((r)=>{
			    
			        if (r.data.success) {
			    
			          this.client_list = r.data.msg
			        }
			    })
			},
			addPerson(){

				if (!this.new_person.target.trim()||!this.new_person.text.trim()) {

					return this.$Notice.error({title: '信息不完整'})
				}

				this.loading = true

				addPerson(this.new_person).then(({ data })=>{

					this.loading = false

					if (!data.success) {

						return this.$Notice.error({title: data.msg})
					}

					this.new_person.target = ''

					this.new_person.text = ''

					this.getPerson()

					return this.$Notice.success({title: '保存成功'})

				}).catch((err)=>{

					this.loading = false

					console.log(err)
				})
			},
			getPerson(){

				getPerson().then(({ data })=>{

					if (!data.success) {

						return this.$Notice.error({title: data.msg})
					}

					this.person_list = data.msg

				}).catch((err)=>{

					console.log(err)
				})
			},
			delPerson(_id){

				this.$Modal.confirm({
			        
			        title: '删除该服务',
			        
			        content: '是否删除该私发服务？',
			        
			        onOk: () => {
			      		
			      		delPerson(_id).then(({ data })=>{

							if (!data.success) {

								return this.$Notice.error({title: data.msg})
							}

							this.getPerson()

							return this.$Notice.success({title: data.msg})

						}).catch((err)=>{

							console.log(err)
						})  	
			        }
			    })
			},
			addPersonPhone(_id,key){

				this.loading = true

				addPersonPhone(_id,this.new_phone).then(({data})=>{

					if (!data.success) {

						return this.$Notice.error({title: data.msg})
					}

					this.person_list[key].phone_list.push(this.new_phone)

					this.getNomal()

					this.new_phone = ''

					this.loading = false

					return this.$Notice.success({title: data.msg})

				}).catch((err)=>{

					this.loading = false

					console.log(err)
				})
			},
			delPersonPhone(_id,phone,key){

				delPersonPhone(_id, phone).then(({data})=>{

					if (!data.success) {

						return this.$Notice.error({title: data.msg})
					}

					const index = this.person_list[key].phone_list.indexOf(phone)

					this.person_list[key].phone_list.splice(index,1)

					this.getNomal()

					return this.$Notice.success({title: data.msg})

				}).catch((err)=>{

					console.log(err)
				})
			},
			sendMessage(_id,phone){

				this.loading = true

				sendMessage(_id,phone).then(({ data })=>{

					this.loading = false

					if (!data.success) {

						return this.$Notice.error({title: data.msg})
					}

					return this.$Notice.success({title: data.msg})

				}).catch((err)=>{

					console.log(err)

					this.loading = false
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
.service-frame{
	min-height: 600px;
}
.service-item-frame{
	width: 50%;
	margin-top: 20px;
}
.phone-item-frame{
	border-bottom: 1px solid silver;
	padding: 10px 0;
	.phone-item{
		width: 50%;
	}
}
.demo-spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
}
.demo-spin-col{
    top: 300px;
    position: fixed;
    border: 1px solid #eee;
}
</style>