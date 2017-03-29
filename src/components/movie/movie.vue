<template>
	<div class="movie">
		<mu-row class='card-row'>
			<mu-col v-for="movie in movies" class='card' width="33" tablet="25" desktop="20" :key="movie.id">
				<mu-paper :zDepth="4">
					<div class="card-img">
					<router-link :to="{name: 'detail', params:{id:movie.id}}"><img :src="movie.images.large"/></router-link>
					</div>
					<div class="card-info">
						<p slot="title" class="text">{{movie.title}}</p>
						<star :size="24" :score="movie.rating.average" v-if="movie.rating.average>0"></star>
						<div v-else class="noratings">暂无评分</div>
					</div>
				</mu-paper>
			</mu-col>
		</mu-row>
	</div>
</template>
<script>
	import star from '@/components/star/star'
	import detail from '@/components/detail/detail'
	var top = require("@/common/json/top");
	var hot = require("@/common/json/hot");
	const movietop = 1;
	const moviehot = 2;
	export default {		
		props: {
			movies: {
				type: Array,
			},
		},
		data() {
			return {
				selectedmovie: {}
			};
		},
		created(){		
		},
		methods:{ 
     
		},
		components:{
			star,
			detail
		}
	}
</script>
<style>
	.movie{
		padding:6px;
	}
	.movie .card-row{
		justify-content: flex-start;
		flex-flow: row wrap;
	}
	.movie .card-row .card{
		padding: 8px;
	}
	.card-img{
		position: relative;
		width: 100%;
		padding-top:150%;
	}
	.card-img img{
		top:0;
		left: 0;
		position: absolute;
		height: 100%;
		width: 100%;
		border-radius: 3px 3px 0px 0px;
		box-sizing: border-box;
	}
	.card-info{
		padding: 6px;
		width: 100%;
		text-align: center;
	}
	.card-info .text{
		margin: 0;
		padding: 0 6px;
		font-size: 14px;
		height: 20px;
		line-height: 20px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.card-info .noratings{
		height: 10px;
		font-size: 10px;
		line-height: 10px;
		color: #FB7B2D;
	}
</style>
