import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'
// import '@/icons' // icon  // 移除了对图标库的引用
import '@/permission' // permission control
import axios from 'axios'
import VueAxios from 'vue-axios'
import * as echarts from 'echarts'
import watermark from './watermark'
import 'default-passive-events'

Vue.directive('watermark', {
  bind: function (el, binding) {
    let text = binding.value
    watermark.set(text)
  }
})
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

// set ElementUI lang to EN
// Vue.use(ElementUI, { locale })

// 如果想要中文版 element-ui，按如下方式声明
Vue.use(ElementUI)
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

// axios.defaults.baseUrl = 'http://10.250.200.233:8000'
// axios.defailts.timeout = 5
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})