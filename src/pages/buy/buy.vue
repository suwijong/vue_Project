<template>
  <div id="worthBuyContainer">
      <div class="buyHeader">
        <i class="iconfont icon-home3" @click="goPath('/home')"></i>
        <span>值得买</span>
        <i class="iconfont icon-sousuo1" @click="goPath('/search')"></i>
        <i class="iconfont icon-gouwuche2" @click="goPath('/shop')"></i>
      </div>
      <!-- 轮播图 -->
      <div class="swiperContainer">
         <Swiper/>
      </div>
      <!-- 瀑布流布局 -->
      <div class="waterFall">
        <WaterFall/>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from '../../components/Buy/Swiper/Swiper'
import WaterFall from '../../components/Buy/WaterFall/WaterFall'

  export default {
    components:{Swiper,WaterFall},
    methods:{
      goPath(path){
        this.$router.push(path)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
#worthBuyContainer
  position relative
  .buyHeader
    width 750px
    height 88px
    display flex
    align-items center
    padding 0 16px 0 24px
    box-sizing border-box
    background white
    border-bottom 1px solid #e3e3e3
    position fixed
    top 0
    left 0
    z-index 6
    .icon-home3
      font-size 48px
    >span 
     font-size 36px 
     margin-left 256px
    .icon-sousuo1
      font-size 50px
      margin-left 120px
    .icon-gouwuche2
      font-size 50px
      margin-left 50px
  .swiperContainer
    background rgb(238,238,238)    
  .waterFall
    background rgb(238,238,238) 
</style>
