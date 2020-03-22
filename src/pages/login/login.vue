<template>
  <div id="loginContainer">
      <div class="loginHeader">
        <i class="iconfont icon-home3" @click="goPath('/home')"></i>
        <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp" alt="">
        <i class="iconfont icon-sousuo1" @click="goPath('/search')"></i>
        <i class="iconfont icon-gouwuche2" @click="goPath('/shop')"></i>
      </div>
      <!-- 手机登录 -->
      <PhoneLogin v-show="isPhoneLogin"/>
      <!-- 邮箱登录 -->
      <EmailLogin v-show="isEmailLogin"/>
      <div class="logo" v-show="isShow">
         <img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
      </div>
      <div class="btnWrap" v-show="isShow">
         
          <div class="phoneBtn" @click="goPhone"> 
             <i class="iconfont icon-shouji1"></i>
             <span class="phoneLogin">手机号快捷登录</span>
          </div>  
        
        
          <div class="emailBtn" @click="goEmail">
             <i class="iconfont icon-icon-mail"></i>
             <span class="emailLogin">邮箱账号登录</span>
          </div>
         
      </div>
      <div class="bottomWrap" v-show="isShow">
          <div class="wechat">
             <i class="iconfont icon-weixin1"></i>
             <span>微信</span>
          </div>
          <div class="qq">
              <i class="iconfont icon-qq2"></i>
              <span>QQ</span>
          </div>
          <div class="sain">
              <i class="iconfont icon-weibo1"></i>
              <span>微博</span>
          </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import PhoneLogin from '../../components/Login/phoneLogin/phoneLogin'
import EmailLogin from '../../components/Login/emailLogin/emailLogin'
  export default {
    components:{PhoneLogin,EmailLogin},
    data() {
      return {
        isShow:true,//是否显示登录首页
        isPhoneLogin:false,//是否手机登录
        isEmailLogin:false//是否邮箱登录
      }
    },
    methods:{
      goPath(path){
        this.$router.push(path)
      },
      goPhone(){//去手机登录页面
        this.isPhoneLogin = true,
        this.isEmailLogin = false
        this.isShow = false
      },
      goEmail(){//去邮箱登录页面
        this.isEmailLogin = true,
        this.isPhoneLogin = false,
        this.isShow = false
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
#loginContainer
  width 750px
  height 1334px
  background #f2f5f4
  .loginHeader
    width 750px
    height 88px
    display flex
    align-items center
    padding 0 16px 0 24px
    box-sizing border-box
    background white
    border-bottom 1px solid #e3e3e3
    .icon-home3
      font-size 48px
    img 
      width 172px
      height 54px
      margin-left 200px 
    .icon-sousuo1
      font-size 50px
      margin-left 120px
    .icon-gouwuche2
      font-size 50px
      margin-left 50px     
  .logo
    width 268px
    height 90px
    margin 0 auto
    padding 160px 0 232px 0
    >img 
      width 268px
      height 90px     
  .btnWrap
    width 750px
    height 220px
    padding  0 40px
    box-sizing border-box
    .phoneBtn
      width 670px
      height 94px
      background $red
      display flex
      align-items center
      justify-content center
      .icon-shouji1
        font-size 40px
        color white
      .phoneLogin
         font-size 28px
         color white
         margin-left 10px 
    .emailBtn
      width 670px
      height 94px
      border 1px solid $red
      box-sizing border-box
      margin-top 32px
      display flex
      align-items center
      justify-content center
      .icon-icon-mail
        font-size 35px
        color $red
      .emailLogin
         font-size 28px
         color $red 
         margin-left 10px 
  .bottomWrap
    width 750px
    height 40px
    display flex
    justify-content center
    margin-top 420px
    div
      width 182px
      height 40px
      display flex
      justify-content center
      align-items center
      .iconfont
        font-size 30px
        color #7f7f7f
      >span 
        font-size 28px
        color #7f7f7f
        margin-left 5px
    .qq
       border-left 1px solid #7f7f7f
       border-right 1px solid #7f7f7f     
      
               
</style>
