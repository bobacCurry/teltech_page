<template>
	<div class="bot-list">
		<ul class="flex-start-center bot-frame">
			<li class="bot-item-frame">
				<Card class="bot-item">
					<div class="bot-name">机器人类型：<a>管家机器人</a>	</div>
					<div class="bot-descript">机器人描述：管理群成员，设置屏蔽禁言等</div>
					<div class="bot-setting"><a @click="$router.push('/share/bot/butler')">点击设置机器人</a></div>
				</Card>
			</li>
		</ul>
	</div>
</template>
<style lang="scss" scoped>
.bot-frame{
	.bot-item-frame{
		width: 30%;
		.bot-item{
			.bot-name{
				a{
					color: green;
				}
			}
			.bot-name,.bot-descript,.bot-setting{
				height: 50px;
			}
		}
	}
}
</style>