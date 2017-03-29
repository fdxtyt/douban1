// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/common/font/iconfont.css'
import '@/common/css/base.css'
import '@/common/css/normalize.css'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-teal.css'
Vue.use(MuseUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.filter('arrtostring', value => value.join(' / '));
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})