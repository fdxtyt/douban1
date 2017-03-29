import Vue from 'vue'
import Router from 'vue-router'
import topbar from '@/components/topbar/topbar'
import detail from '@/components/detail/detail'
Vue.use(Router)

export default new Router({
	routes: [
		{
		path: '/',
		name: 'home',
		component: topbar,
	},
	{
		path: '/detail/:id',
		name: 'detail',
		component: detail,
	},
	]
})
