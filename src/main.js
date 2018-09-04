// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 重置浏览器样式.
require('./css/reast.css')
// ui
require('./css/weui.css')
// 公共样式.
require('./css/layout.css')

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import nextRouter from './router'
import routes from './routes'
import IScroll from 'iscroll'

import { config, container } from './landrover/business/index'
import Service from './service/'
import Basics from './utils/basics'

Vue.use(VueRouter)


const mallService = new Service()

const router = new VueRouter({
  routes: routes
})
nextRouter(router)

Vue.use(vueBridge,router)

mallService.setup()
container.mallService = mallService
Vue.config.productionTip = true

window.$ = window.Zepto = require('webpack-zepto')
window.router = router
window.IScroll = IScroll
window.cars = null
window.basics = new Basics()
basics.bindElementActive()

new Vue({
  router,
  template: '<App/>',
  components: { App },
  linkActiveClass: 'active'
}).$mount('#app')
