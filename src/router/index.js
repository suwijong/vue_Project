import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

// 1. 生成路由器
const router = new VueRouter({
  routes,
  mode:'history' //去除url中的#号
})

export default router