<template>
  <div class="bigFloor">
       <div class="bigFloorTop">
            <a href="javascript::">
            <!-- <img v-if="homeData.bigPromotionModule" :src="homeData.bigPromotionModule.floorList[0].cells[0].schemeUrl" alt=""> -->
            </a>
        </div>
        <div class="bigFloorBottom">
            <img class="img" src="https://yanxuan.nosdn.127.net/a4187bffa2a0431ec5d6e2dd1070d6c5.gif?imageView&quality=75" alt="">   
            <ul class="floorList" v-if="homeData.bigPromotionModule">
                <li class="floorItem" v-for="(floorItem, index) in homeData.bigPromotionModule.floorList" :key="index">
                    <img :src="floorItem.cells[0].picUrl" alt="">
                </li>
            </ul>
        </div>

  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from "vuex"
  export default {
      
        computed:{
         ...mapState({
           homeData:state => state.homeData,
           navData:state => state.navData
         })
      }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../../common/stylus/mixins.styl"
.bigFloor
  width 750px
  height 828px 
  background $blue
  .bigFloorTop
    position relative
    width 750px
    height 240px
    background white
    background-size 100%
    background-image url(https://yanxuan.nosdn.127.net/5db28c137605ea7576c986e9c285e1c6.png?quality=75&type=webp&imageView&thumbnail=750x0)    
    a
       img 
         width 168px
         height 168px
         position absolute
         top 36px
         left 78px
  .bigFloorBottom
      width 750px
      height 588px
      padding 20px
      box-sizing border-box 
      .img 
        width 710px
        height 160px 
      .floorList
        .floorItem
          width 351px
          height 186px
          float left 
          margin-top 8px
          margin-left 4px
          img 
            width 100%
            height 100%        
</style>

