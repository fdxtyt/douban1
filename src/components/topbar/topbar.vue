<template>
	<div class="topbar">
		<mu-appbar title="爱电影">
			<mu-icon-button class="iconfont icon-anniu1" slot="left"/>
			<mu-icon-button class="iconfont icon-icon" slot="right"/>
		</mu-appbar>
		<mu-tabs :value="activeTab" @change="handleTabChange">
			<mu-tab value="tab1" title="评分最高"/>
			<mu-tab value="tab2" title="正在热映"/>
		</mu-tabs>
		<movie :movies="movies"></movie>
	</div>
</template>
<script>
	import movie from '@/components/movie/movie'
	const top = require("@/common/json/top");
	const hot = require("@/common/json/hot");
	export default {
		name: 'topbar',
		created(){
			this.movies=top.top;	
		},
		data() {
			return {
				activeTab: 'tab1',

			};
		},
		methods: {
			handleTabChange (val) {
				this.activeTab = val;
				if(val == 'tab1'){
					this.movies=top.top;
				}else{
					this.movies=hot.hot;
				}
			},
		},
		components:{
			movie
		}
	}
</script>
<style>
	.topbar{
		width: 100%;
		height: 100%;
	}

</style>
