import Vue from 'vue'
import 'lib-flexible/flexible'
//引入验证的模块
import './veeValidate'
import router from './router'
import store from './store'

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import * as API from './api'
import waterfall from 'vue-waterfall2'
Vue.use(waterfall)
Vue.use(Mint)


import App from './App.vue'
Vue.config.productionTip = false

Vue.prototype.$API = API


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
