<template>
	<div class="service-chat">
		<div class="title">
			<Select v-model="type" style="width:200px" placeholder="群类型" @on-change="changeType">
		        <Option v-for="(item,key) in this.chatType" :value="key" :key="key">{{ item }}</Option>
		    </Select>
			<Select v-model="status" style="width:200px" placeholder="审核状态" @on-change="changeStatus">
		        <Option v-for="(item,key) in this.chatStatus" :value="key" :key="key">{{ item }}</Option>
		    </Select>
			<Table :columns="columns" :data="chatids"></Table>
			<Page :page-size="50" :total="5000" simple @on-change="getChat"/>
		</div>
	</div>
</template>
<script>
import {chatType,chatStatus} from '@/config/client'
import {addChat,delChat,getChat} from '@/api/admin'
export default {
	data(){
		let columns = [
				{title:'群名称',key:'chatid',render: (h, params) => {
	                return h('a',{
	                	domProps:{
	                		href: 'https://t.me/'+params.row.chatid,
                        	target:'_blank'
	                	}
	                },params.row.chatid)
	            }},
				{title:'群类型',key:'type',render: (h, params) => {
	                return h('span',chatType[params.row.type])
	            }},
				{title:'是否入群验证',key:'auth',render: (h, params) => {
	                return h('div',[

                		h('span',{style: {
                        
                            color: params.row.auth?'red':''
                        
                        }},params.row.auth?'需要':'不需要'),
	                    
	                    h('Button', {
	                        props: {
	                            size: 'small',
	                            disabled: params.row.status?true:false
	                        },
	                        style: {
	                            marginLeft: '5px'
	                        },
	                        on: {
	                            click: () => {
	                                params.row.auth = params.row.auth===0?1:0
	                            }
	                        }
	                    }, '切换')
	                ])
	            }},
				{title:'审核状态',key:'status',render: (h, params) => {
	                return h('span',{
	                	style:{
	                		color: params.row.status?'red':''
	                	}
	                },params.row.status?'已通过':'未通过')
	            }},
				{title:'操作',key:'action',render: (h, params) => {
	                return h('div', [
	                    h('Button', {
	                        props: {
	                            type: 'primary',
	                            size: 'small',
	                            disabled: params.row.status?true:false
	                        },
	                        style: {
	                            marginRight: '5px'
	                        },
	                        on: {
	                            click: () => {
	                                this.addChat(params.row._id,params.row.auth)
	                            }
	                        }
	                    }, '通过'),
	                    h('Button', {
	                        props: {
	                            type: 'error',
	                            size: 'small'
	                        },
	                        on: {
	                            click: () => {
	                                this.delChat(params.row._id)
	                            }
	                        }
	                    }, '删除')
	                ]);
	            }}
			]
		return {
			chatType,
			chatStatus,
			columns,
			chatids:[],
			auth:['不需要','需要'],
			status:0,
			type:0,
			new_chat:{
				chatid:'',
				type:'',
				auth:''
			}
		}
	},
	mounted(){
		this.getChat()
	},
	methods:{
		getChat(page=1){
			getChat(this.type,this.status,page,50).then((r)=>{
				this.chatids = r.data.msg
			})
		},
		changeStatus(e){
			this.state = e
			this.getChat()
		},
		changeType(e){
			this.type = e
			this.getChat()
		},
		addChat(_id,auth){
			this.$Modal.confirm({
                title: '是否通过该群？',
                content: '<div><p>审核通过</p></div>',
                onOk: () => {
                	addChat(_id,auth).then((r)=>{
                		if (r.data.success) {
                			this.$Notice.success({title:r.data.msg})
                			this.getChat()
                		}else{
                			this.$Notice.error({title:r.data.msg})
                		}
                	}).catch((e)=>{
                		console.log(e)
                	})
                }
            })
		},
		delChat(_id){
			this.$Modal.confirm({
                title: '是否删除该群？',
                content: '<p>审核不通过</p>',
                onOk: () => {
                    delChat(_id).then((r)=>{
                		if (r.data.success) {
                			this.$Notice.success({title:r.data.msg})
                			this.getChat()
                		}else{
                			this.$Notice.error({title:r.data.msg})
                		}
                	}).catch((e)=>{
                		console.log(e)
                	})
                }
            })
		}
	}
}	
</script>
<style lang="scss" scoped>
	.title{
		font-size: 16px;
		padding: 20px 0;
	}
</style>