<template>
  <div id="footerContainer">
    <div :class="{active: $route.path === '/home'}" @click="goPath('/home')" class="guideItem">
      <i class="iconfont icon-home2"></i>
      <span>首页</span>
    </div>
    <div :class="{active: $route.path === '/classfiy/right/11'}" @click="goPath('/classfiy/right/11')" class="guideItem">
      <i class="iconfont icon-leimupinleifenleileibie"></i>

      <span>分类</span>
    </div>
    <div :class="{active: $route.path === '/buy'}" @click="goPath('/buy')" class="guideItem">
      <i class="iconfont icon-tupianimgyulan"></i>

      <span>值得买</span>
    </div>
    <div :class="{active: $route.path === '/shop'}" @click="goPath('/shop')" class="guideItem">
      <i class="iconfont icon-gouwuche"></i>

      <span>购物车</span>
    </div>
    <div :class="{active: $route.path === '/profile'}" @click="goPath('/profile')" class="guideItem">
      <i class="iconfont icon-geren"></i>

      <span>个人</span>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      goPath(path){
        // 跳转至指定的路由路径
         path !== this.$route.path && this.$router.push(path)

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  #footerContainer
    display flex
    // top-border-1px(red)
    border-top 1px solid #ededed
    position fixed
    left 0
    bottom 0
    width 750px
    height 98px
    box-sizing border-box
    background #fff
    padding-top 15px
    .guideItem
      width 20%
      height 71px
      text-align center
      display flex
      flex-direction column
      &.active
        color $red
      .iconfont
        font-size 40px
        line-height 40px
      span 
        font-size 24px
        margin-top 8px   
</style>
