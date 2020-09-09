<template>
<div class="butler-frame">
	<ul class="flex-between-center butler-item-list">
		<li class="butler-item-frame" v-for="(item,key) in list">
			<Card class="butler-item">
				<div>
					<div class="title">群名称</div>
					<div>
						{{item.chatname}}
					</div>
				</div>
				<div>
					<div class="title">欢迎语</div>
					<div>
						{{item.greet}}
					</div>
				</div>
				<div>
					<div class="title">警告语</div>
					<div>
						{{item.warning}}
					</div>
				</div>
				<div>
					<div class="title">屏蔽词</div>
					<div>
						<span v-for="(item1,key) in item.keywords">
							<Tag color="primary">{{item1}}</Tag>
						</span>
					</div>
				</div>
				<div>
					<div class="title">屏蔽时间（分钟）</div>
					<div>
						<p v-for="(item1,key1) in item.limit">
							第 {{key1+1}} 次禁言时间 {{item1}} 分钟
						</p>
					</div>
				</div>
				<br/>
				<div>
					<div class="title">
						<Button type="warning" @click="del(item._id)">删除规则</Button>
					</div>
				</div>
			</Card>
		</li>
		<li class="butler-item-frame">
			<Card class="butler-item">
				<div>
					<div class="title">群名称</div>
					<div>
						<Input v-model="butler.chatname" placeholder="输入群名称"/>
					</div>
				</div>
				<div>
					<div class="title">欢迎语</div>
					<div>
						<Input v-model="butler.greet" placeholder="设置欢迎语"/>
					</div>
				</div>
				<div>
					<div class="title">警告语</div>
					<div>
						<Input v-model="butler.warning" placeholder="设置警告语"/>
					</div>
				</div>
				<div>
					<div class="title">屏蔽词</div>
					<div>
						<Input v-model="keyword" placeholder="设置屏蔽词">
							<Button slot="append" @click="add_keyword()">添加</Button>
						</Input>
					</div>
					<br/>
					<div>
						<span v-for="(item,key) in butler.keywords">
							<Tag color="primary" closable @on-close="butler.keywords.splice(key,1)">{{item}}</Tag>
						</span>
					</div>
				</div>
				<div>
					<div class="title">屏蔽时间（分钟）<a @click="butler.limit=[]">重设</a></div>
					<div>
						<Input v-model="limit" placeholder="设置屏蔽时间">
							<Button slot="append" @click="add_limit()" :disabled="butler.limit.length>=3">添加</Button>
						</Input>
					</div>
					<br/>
					<div>
						<p v-for="(item,key) in butler.limit">
							第 {{key+1}} 次禁言时间 {{item}} 分钟
						</p>
					</div>
				</div>
				<br/>
				<div>
					<div class="title">
						<Button type="primary" @click="add">添加新规则</Button>
					</div>
				</div>
			</Card>
		</li>
	</ul>
</div>
</template>
<script>
import {addButler,delButler,getButler} from '@/api/bots'
export default{
	mounted(){

		this.get()
	},
	data(){
		return {
			keyword:'',
			limit:'',
			butler:{
				chatname:'',
				keywords:[],
				greet:'',
				warning:'',
				limit:[]
			},
			page:1,
			list:[]
		}
	},
	methods:{
		add_keyword(){

			if(!this.keyword.trim()){

				return
			}

			this.butler.keywords.push(this.keyword)
			
			this.keyword = ''
		},
		add_limit(){

			if(!this.limit.trim()){
				
				return
			}
			
			this.butler.limit.push(this.limit)
			
			this.limit = ''
		},
		async get(){

			const { data } = await getButler(this.page)

			if(data.success){

				this.list = data.msg
			}

			console.log(data)
		},
		async add(){

			if(!this.butler.chatname){

				return this.$Notice.error({title:'群名称不得为空'})

			}
			
			const { data } = await addButler(this.butler)

			await this.get()
		},
		async del(_id){

			this.$Modal.confirm({

		        title: '是否删除该设置？',
		        
		        content: '是否删除该设置？',
		        
		        onOk: () => {
		        
		          	delButler(_id).then(({data})=>{
			    
			            if (data.success) {
			    
			              	this.get()
			    
			              	return this.$Notice.success({title:data.msg})
			    
			            }else{
			    
			              	return this.$Notice.error({title:'删除错误',desc:data.msg})
			    
			            }
		          	})
		        }
		    })
		}
	}
}
</script>
<style lang="scss" scoped>
.butler-frame{
	.butler-item-list{
		.butler-item-frame{
			width: 49%;
			.butler-item{
				min-height:300px;
				.title{
					margin:10px 0;
				}
			}
		}
	}
}
</style>