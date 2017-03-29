<template>
	<div id="app">
		<router-view></router-view>
		<foot></foot>
	</div>
</template>
<script>
	import foot from '@/components/foot/foot'
	export default {
		name: 'app',
		components:{
			foot
		}
	}
</script>
<style>
	#app{
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		position: relative;
		padding-bottom: 30px;
		display: flex;
		min-height: 100vh;
		flex-direction: column;
	}
	.trans-opacity-enter-active, .trans-opacity-leave-active{
		transition: opacity 0.5s;
	}
	.trans-opacity-enter, .trans-opacity-leave-active{
		opacity: 0;
	} 

</style>
