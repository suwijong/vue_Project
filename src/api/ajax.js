import axios from 'axios'
import qs from 'qs'


//创建一个axios 的伪实例
const ajax = axios.create({
    // baseURL:'/api'
})

//请求拦截器
ajax.interceptors.request.use(config => {
    config.data = qs.stringify(config.data) // json对象格式 ---> url-encoding形式
    return config
})


//响应拦截器
ajax.interceptors.response.use(
    response => response.data ,//成功返回数据
    error =>{
       console.log(error);


        // 默认会返回一个成功的promise实例，但是没有数据
     // 手动返回一个状态为初始化的promise
      return new Promise(() => {})
    }
)

export default ajax //暴露出去