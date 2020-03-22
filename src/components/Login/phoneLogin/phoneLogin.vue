<template>
  <div id="phoneLoginContainer">
     <div class="logo">
        <img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt=""> 
     </div>
     <div class="loginContent">
        <form>
           <div class="phoneNumber">
             <input @click="clearError" v-model="phone" name="phone" v-validate="'required|phone'"  type="text" maxlength="11" placeholder="请输入手机号码">
             <i class="iconfont icon-quxiao1" v-show="phone" @click="clearPhone"></i>
             
           </div>
           <span style="color: red;" v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
           <div class="message">
              <input  type="text" v-model="code" name="code" v-validate="'required'" placeholder="请输入短信验证码">
              <button @click.prevent="getCode"
                      :disabled ="countDownTime>0"
              >{{countDownTime?`${countDownTime}s后再次获取`:"获取验证码"}}</button>
           </div>
           <span style="color: red;" v-show="errors.has('code')">{{ errors.first('code') }}</span>
           <div class="import" v-show="isShowImport">请输入手机号</div>
           <div class="questions">
              <a href="javascript::">遇到的问题?</a>
              <a href="javascript::">使用密码验证登录</a>
           </div> 
           <div class="loginBtn" @click="login">
              <span>登录</span>
           </div> 
        </form>
        <div class="agree">
           <span class="check" @click="iAgree">
             <i v-show="isAgree" class="iconfont icon-duigou1"></i>
           </span>
           <span class="woAgree">我同意</span>
           <a href="javascript::">《服务条款》</a>
           <span class="and">和</span>
           <a href="javascript::">《网易隐私政策》</a>
        </div>
     </div>
     <div class="other"> 
        <span>其他登录方式</span>
        <i class="iconfont icon-arrow-right-copy-copy"></i>
     </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        phone:'',//手机号
        code:'',//短信验证码
        countDownTime:0,//倒计时的初始化
        isShowImport:false,//是否显示请正确输入手机号
        isAgree:false
      }
    },
    methods:{
      clearPhone(){
        this.phone = ""
      },
      getCode(){
        if (this.phone) {
            this.countDownTime = 5 //初始一个倒计时
           let timer = setInterval(() => {
           this.countDownTime-- 
           if (this.countDownTime === 0) { //倒计时为零时清除
              clearInterval(timer)
           }
         }, 1000);
           
        }else{
           this.isShowImport = true
        }

      },
      clearError(){ //清除获取验证码时的提示
         this.isShowImport = false
   
      },
      async login(){
        //应该要进行前后端验证
        let {phone,code} = this
        let names = ['phone','code']
        const success = await this.$validator.validateAll(names)
      },
      iAgree(){
        this.isAgree = !this.isAgree
      }
    },
    computed:{//正确手机号验证
      rightPhoneNumber(){
       return /^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phone)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../../common/stylus/mixins.styl"
#phoneLoginContainer
  width 750px
  height calc(100vh - 88px)
  background white
  .logo
    width 750px
    height 90px
    display flex
    justify-content center
    padding-top 56px
    >img
     width 268px
     height 90px 
  .loginContent
    margin-top 100px
    width 750px
    height 516px
    padding 0 40px
    box-sizing border-box
    >form
     .phoneNumber
       width 670px
       height 90px
       display flex
       align-items center
       border-bottom 1px solid #e3e3e3
       box-sizing border-box
       >input 
         width 590px
         height 42px
         font-size 26px
         outline: none
     .message
       width 670px
       height 90px
       display flex
       justify-content space-between
       align-items center
       border-bottom 1px solid #e3e3e3
       box-sizing border-box
       >input 
         width 380px
         height 42px
         font-size 26px
         outline: none 
       >button 
         height 54px
         background white
         outline none
         line-height 54px
         text-align center
         font-size 14px
         color #333
         border 1px solid #e3e3e3
         box-sizing border-box
     .import
       color red
       margin-top 10px
     .questions
      width 670px 
      height 42px
      display flex
      align-items center
      justify-content space-between
      margin-top 50px
      >a
       color #333
       font-size 28px
     .loginBtn
       width 670px
       height 90px
       display flex
       align-items center 
       justify-content center
       background $red
       margin-top 30px
       border-radius 5px
       >span 
        font-size 28px
        color white 
    .agree
      width 670px
      height 48px
      display flex
      align-items center
      margin-top 30px
      >span
       font-size 24px 
       color #7f7f7f
       margin-left 3px
      >a
       font-size 24px
       color #007aff
      .check
       width 34px
       height 34px
       line-height 40px
       border 1px solid #666   
  .other
    width 670px
    height 38px
    display flex
    align-items center
    justify-content center
    >span 
     color #333
     font-size 28px
    >.iconfont
     font-size 28px     
</style>
