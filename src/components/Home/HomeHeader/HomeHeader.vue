<template>
  <div id="headerWrap">
       <div class="homeContainerHeader">
            <div class="header">
              <img class="logo" src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp" alt="">
              <router-link to="/search">
                <div class="search">
                  <i class="iconfont icon-sousuo2"></i>
                  <span>搜索商品</span>
                </div>
              </router-link>
              <button class="btn" @click.prevent="goLogin">登录</button>         
            </div>
            <div class="nav">
                <div class="navList">
                  <ul class="content">
                       <!-- <li class="active">推荐</li> -->
                       <li v-for="(navItem, index) in navData" :key="index"
                           @click="handleIndex(index)"
                           :class="{active:newIndex == index}" 
                         >
                         {{navItem.name}}
                       </li>
                  </ul>
                </div>
                <div class="row">
                  <i class="iconfont icon-jiantouxia" @click="isShowMask=true"></i>
                </div> 
            </div>
        </div>
        <section v-show="isShowMask">
        <div class="tabalter">
            <span class="all">全部频道</span>
            <i class="iconfont icon-jiantoushang1" @click="isShowMask=false"></i>
        </div>
        <ul class="maskList">
            <li class="current">推荐</li>
            <li v-for="(navItem, index) in navData" :key="index">
                        {{navItem.name}}
            </li>
        </ul>   
    </section>

  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from "vuex"
import BScroll from "better-scroll"
  export default {
          data() {
      return {
        isShowMask:false, //默认不显示遮罩
        newIndex:''
      }
    },


     mounted(){
        new BScroll('.navList',{
          scrollX:true,
          click:true
        })
  
      },
          computed:{
         ...mapState({
           homeData:state => state.homeData,
           navData:state => state.navData
         })
      },
      methods:{
        goLogin(){
          this.$router.push('/login')
        },
        handleIndex(index){
          this.newIndex = index
        }
      }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../../common/stylus/mixins.styl"
#headerWrap
  position relative
  .homeContainerHeader
      width 750px
      height 148px
      position fixed
      z-index 66
      .header
        display flex
        width 750px
        height 88px
        align-items center
        background white
        img 
          width 138px
          height 40px
          margin-left 23px
        .search
          width 442px
          height 56px
          line-height 56px
          background #ededed
          border-radius 10px
          padding-left 100px
          box-sizing border-box
          margin-left 20px
          font-size 28px
          >span
           margin-left 10px
        .btn 
            width 74px
            height 40px
            // line-height 40px
            color $red
            border 1px solid $red
            border-radius  8px
            background-color white
            font-size 12px
            margin-left 20px
      .nav
        width 750px
        height 60px 
        position relative
        background white
        .navList
          width 650px
          height 60px
          overflow hidden
          .content
            height 60px
            width 1450px
            line-height 60px
            display flex
            white-space: nowrap
            li
              font-size 28px
              padding 0 20px
              margin-left 16px
            .active
              color $red 
              border-bottom  4px solid $red
        .row
          width 100px
          height 60px 
          position absolute
          right 0
          top 0  
          line-height 60px
          text-align center
          .iconfont
              font-size 35px
  section
    width 750px
    height 1246px
    background rgba(0,0,0,0.7)
    position fixed
    left 0
    top 88px
    z-index 99
    .tabalter
      width 750px
      height 60px
      line-height 60px
      display flex
      background white
      .all
        font-size 28px
        margin-left 30px
      .iconfont
        font-size 36px
        margin-left 540px
    .maskList
      width 750px
      height 312px
      background white
      padding-top 10px
      li
        width 150px
        height 56px
        line-height 56px
        text-align  center
        background #fafafa
        border 1px solid  #ededed
        color #333333
        float left
        margin 0 0 40px 30px
      .current
         border 1px solid  $red 
         color $red                                 
</style>
