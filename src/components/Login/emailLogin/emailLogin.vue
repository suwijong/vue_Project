<template>
  <div id="emailLoginContainer">
     <div class="logo">
        <img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt=""> 
     </div>
     <div class="loginContent">
        <form>
           <div class="emailNumber">
             <input  v-model="email" name="email" v-validate="'required|email'" type="email" placeholder="邮箱账号">
           </div>
           <span style="color: red;" v-show="errors.has('email')">{{ errors.first('email') }}</span>
           <div class="password">
              <input  v-model="password"  name="password" v-validate="'required'" type="text" placeholder="密码">
           </div>
           <span style="color: red;" v-show="errors.has('password')">{{ errors.first('password') }}</span>
           <div class="register">
              <a href="javascript::">注册账号</a>
              <a href="javascript::">忘记密码</a>
           </div> 
           <div class="loginBtn" @click="login">
              <span>登录</span>
           </div> 
        </form>
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
           email:'',
           password:'',
        }
     },
     methods:{
        async login(){
           let {email,password} = this
           let names = ['email','password']
         const success = await this.$validator.validateAll(names)
        }
     }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../../common/stylus/mixins.styl"
#emailLoginContainer
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
    margin-top 150px
    width 750px
    height 516px
    padding 0 40px
    box-sizing border-box
    >form
     .emailNumber
       width 670px
       height 90px
       display flex
       align-items center
       border-bottom 1px solid #e3e3e3
       box-sizing border-box
       >input 
         width 670px
         height 42px
         font-size 26px
         outline: none
     .password
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
     .register
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