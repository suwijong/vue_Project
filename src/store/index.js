import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'


//声明使用
Vue.use(Vuex)

//生成store对象 完了要在main.js挂载哦

let store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

//暴露出去
export default store