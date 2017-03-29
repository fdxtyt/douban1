<template>
	<div class="detail">
		<i class="iconfont icon-back" slot="left" @click='goBack()'/>
		<div class="image" :style="'background-image: url('+movie.images.large+')'"></div>
		<div class="title">
			<div class="title-info">
				<div class="title-image">
					<img :src='movie.images.large' />
				</div>
				<div class="title-text">
					<p>{{movie.title}}</p>
					<p v-if="movie.rating.average>0">{{movie.rating.average}}</p>
				</div>
			</div>
		</div>
		<div class="starinfo">
			<star :size="48" :score="movie.rating.average" v-if="movie.rating.average>0"></star>
			<div v-else class="noratings">暂无评分</div>
		</div>
		<div class="setail-info">
			<p class="info-content"><span>类型</span><span class="info-text">{{movie.genres|arrtostring }}</span></p>
			<p class="info-content"><span>评论人数</span><span class="info-text">{{movie.collect_count}}</span></p>
			<p class="info-content"><span>年代</span><span class="info-text">{{movie.year}}</span></p>
			<p class="info-content"><span>原名</span><span class="info-text">{{movie.original_title}}</span></p>

		</div>
			<div class="author">
				<p class="author-type">导演</p>
				<mu-row>
					<mu-col class='author-elem' width="50" tablet="33" desktop="25" v-for="director in movie.directors">
						<mu-paper>
							<div class='author-wrap'>
								<div class="author-image">
									<div class='author-padding' :style="'background-image: url('+(director.avatars && director.avatars.large || '')+')'"></div>
								</div>
								<div class="author-name">{{director.name}}</div>
							</div>
						</mu-paper>
					</mu-col>
				</mu-row>
			</div>
			<div class="author">
				<p class="author-type">主演</p>
				<mu-row>
					<mu-col class='author-elem' width="50" tablet="33" desktop="25" v-for="avatar in movie.casts">
						<mu-paper>
							<div class='author-wrap'>
								<div class="author-image">
									<div class='author-padding' :style="'background-image: url('+(avatar.avatars && avatar.avatars.large || '')+')'"></div>
								</div>
								<div class="author-name">{{avatar.name}}</div>
							</div>
						</mu-paper>
					</mu-col>

				</mu-row>
			</div>
		</div>
	</template>
	<script>
		import router from '@/router'
		import star from '@/components/star/star'
		var top = require("@/common/json/top");
		var hot = require("@/common/json/hot");
		export default {
			name: 'detail',
			props: {
			},
			data() {
				return {
					movie:{},
				}
			},
			mounted() {

			},
			created() {
				this.selectmovie(this.$route.params.id);
			},
			computed(){

			},
			methods: {
				selectmovie(id){
					var allmovie=top.top.concat(hot.hot);
					var value = null;
					for(var key in allmovie){
						value= allmovie[key];
						if(value.id===id){
							this.movie = value;
						}
					}
				},
				goBack() {
					router.go(-1);
				},	
			},
			components:{
				star
			}
		}
	</script>
	<style>
		.detail{
			flex: 1;
			left: 0;
			top: 0;
		}
		.icon-back{
			position: absolute;
			margin: 15px 0 0 20px;
			color: #fff;
			z-index: 10;
			text-shadow: 1px 1px 4px #000;
		}
		.image{
			width: 100%;
			padding-top: 80%;
			background: #fff;
			background-repeat: no-repeat;
			background-size: cover;
			-moz-background-size: cover;
			overflow: hidden;
		}
		.title{
			padding: 10px;
			box-shadow: 0 0 15px 5px #ccc;
		}
		.title-info{
			position: relative;
		}
		.title-image{
			width: 30%;
			position: absolute;
			bottom: 0;
		}
		.title-image>img{
			width: 100%;
			display: block;
		}
		.title-text{
			position: relative;
			font-size: 16px;
			font-weight: 600;
			padding: 4px 0 4px 30%;
		}
		.title-text>p{
			padding-left: 15px;
			margin: 0;
		}
		.starinfo{
			display: flex;
			align-items: center;
			height: 55px;
			-ms-flex-pack: center;
			justify-content: center;
			background: rgb(238, 238, 238);
		}
		.setail-info{
			margin:30px;
		}
		.info-content>span{
			display: block;
		}
		.info-text{
			color: #819574;
		}
		.author{
			margin: 25px;
		}
		.author-type{
			padding: 0px 5px;
			margin: 0;
		}
		.author-elem{
			padding:5px;
		}
		.author-wrap{
			position: relative;
			display: block;
			overflow: hidden;
		}
		.author-image{
			float: left;
			width: 50%;
			border-radius: 2px  0 0 2px;
			overflow: hidden;
		}
		.author-padding{
			width: 100%;
			padding-top: 141%;
			background-size: cover;
			-moz-background-size: cover;
		}
		.author-name{ 
			float: left;
			width: 50%;
			padding: 10px 6px;
		}
	</style>
