import Vue from 'vue'
import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'


Vue.use(VeeValidate)
VeeValidate.Validator.localize('zh_CN', {
  messages: zh_CN.messages,
  attributes: {
    phone: '手机号',
    code: '短信验证码',
    email:'账号',
    password:'密码'
  }
})


//自定义验证内容
// 手机号
VeeValidate.Validator.extend('phone', {
    validate: value => {
      return /^1(3|4|5|6|7|8|9)\d{9}$/.test(value)
    },
    getMessage: field => field + '必须是11位手机号码'
  })
  
  // 短信验证码
  VeeValidate.Validator.extend('code', {
    validate: value => {
      return /^\d{4,6}$/.test(value)
    },
    getMessage: field =>field + '必须是4-6位数字'
  })