<template>
	<div id="hr-client">
		<ul class="flex-start-center">
			<li class="client-item-frame">
				<Card class="client-item"></Card>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
  data () {
    return {
      clientList: []
    }
  },
  mounted () {
    this.getClient()
  },
  methods: {
    getClient () {

    },
    newClient () {

    }
  }
}
</script>
<style lang="scss" scoped>
.client-item-frame{
	width: 25%;
	height: 200px;
	.client-item{
		height: 100%;
	}
}
</style>
