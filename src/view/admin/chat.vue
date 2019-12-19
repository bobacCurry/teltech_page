<template>
	<div class="service-chat">
		<div class="title">
			<Select v-model="status" style="width:200px" placeholder="群类型" @on-change="changeStatus">
		        <Option v-for="(item,key) in this.chatStatus" :value="key" :key="key">{{ item }}</Option>
		    </Select>
			<Table :columns="columns" :data="chatids"></Table>
			<Page :page-size="50" :total="5000" simple @on-change="getChat"/>
		</div>
	</div>
</template>
<script>
import {chatType,chatStatus} from '@/config/client'
import {addChat,getChat} from '@/api/admin'
export default {
	data(){
		let columns = [
				{title:'群名称',key:'chatid'},
				{title:'群类型',key:'type',render: (h, params) => {
	                return h('span',chatType[params.row.type])
	            }},
				{title:'是否入群验证',key:'auth',render: (h, params) => {
	                return h('span',params.row.type?'需要':'不需要')
	            }},
				{title:'审核状态',key:'status',render: (h, params) => {
	                return h('span',params.row.status?'已通过':'未通过')
	            }},
				{title:'操作',key:'action',render: (h, params) => {
	                return h('div', [
	                    h('Button', {
	                        props: {
	                            type: 'primary',
	                            size: 'small'
	                        },
	                        style: {
	                            marginRight: '5px'
	                        },
	                        on: {
	                            click: () => {
	                                this.addChat()
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
	                                this.delChat()
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
			new_chat:{
				chatid:'',
				type:'',
				auth:''
			},
			status:0
		}
	},
	mounted(){
		this.getChat()
	},
	methods:{
		getChat(page=1){
			getChat(this.status,page,50).then((r)=>{
				this.chatids = r.data.msg
			})
		},
		changeStatus(e){
			this.state = e
			this.getChat()
		},
		addChat(){
			this.$Modal.warning({
                render: (h) => {
                    return h('div','确认通过？')
                }
            })
		},
		delChat(){
			this.$Modal.warning({
                render: (h) => {
                    return h('div','确认删除？')
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