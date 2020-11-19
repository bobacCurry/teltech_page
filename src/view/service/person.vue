<template>
	<div>
		<ul class="flex-start-center">
			<li><Input v-model="target" style="width:300px" placeholder="群名称（将人拉入该群）"/></li>
			&nbsp;&nbsp;&nbsp;
			<li><Select v-model="phone" style="width:300px" placeholder="选择TG账号">
			        <Option v-for="(item,key) in phoneList" :value="item.phone" :key="key">{{ item.phone }}</Option>
			    </Select>
			</li>
			&nbsp;&nbsp;&nbsp;
			<li><Button type="primary" @click="add()" :disabled="loading">创建拉人服务</Button></li>
		</ul>
		<ul class="flex-start-top">
			<li class="service-item-frame">
				<Collapse>
			        <Panel name="目标群">
			            目标群
			            <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
			        </Panel>
			        <Panel name="发送配置">
			            发送配置
			            <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
			        </Panel>
			        <Panel name="可发用户">
			            可发用户
			            <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
			        </Panel>
			    </Collapse>
			</li>
			<li class="service-item-frame">
				<Collapse>
			        <Panel name="目标群">
			            目标群
			            <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
			        </Panel>
			        <Panel name="发送配置">
			            发送配置
			            <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
			        </Panel>
			        <Panel name="可发用户">
			            可发用户
			            <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
			        </Panel>
			    </Collapse>
			</li>
			<li class="service-item-frame">
				<Collapse>
			        <Panel name="目标群">
			            目标群
			            <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
			        </Panel>
			        <Panel name="发送配置">
			            发送配置
			            <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
			        </Panel>
			        <Panel name="可发用户">
			            可发用户
			            <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
			        </Panel>
			    </Collapse>
			</li>
			<li class="service-item-frame">
				<Collapse>
			        <Panel name="目标群">
			            目标群
			            <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
			        </Panel>
			        <Panel name="发送配置">
			            发送配置
			            <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
			        </Panel>
			        <Panel name="可发用户">
			            可发用户
			            <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
			        </Panel>
			    </Collapse>
			</li>
		</ul>
		<div>
			
		</div>	
	</div>
</template>
<script>
	export default{
		data(){
			return {
				target:'',
				phone:'',
				phoneList:[],
				loading:false
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
</style>