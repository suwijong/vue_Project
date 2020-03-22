<template>
  <div class="hotSale">
        <span class="hotSaleTitle" v-if="homeData.categoryHotSellModule">{{homeData.categoryHotSellModule.title}}</span>
        <div class="hotGood">
            <div class="hotGoodLeft">
                <span class="hotGoodLeftText" v-if="homeData.categoryHotSellModule" >{{homeData.categoryHotSellModule.categoryList[0].categoryName}}</span>
                <img class="hotGoodLeftImg" v-if="homeData.categoryHotSellModule"  :src="homeData.categoryHotSellModule.categoryList[0].showPicUrl" alt="">
            </div>
            <div class="hotGoodRight">
                <span class="hotGoodRightText" v-if="homeData.categoryHotSellModule">{{homeData.categoryHotSellModule.categoryList[1].categoryName}}</span>
                <img class="hotGoodRightImg" v-if="homeData.categoryHotSellModule"  :src="homeData.categoryHotSellModule.categoryList[1].showPicUrl" alt="">
            </div>
        </div>
        <ul class="hotSaleList" v-if="homeData.categoryHotSellModule" >
            <li class="hotSaleItem" v-for="(item, index) in homeData.categoryHotSellModule.categoryList.slice(2,11)" :key="index">
                <span class="hotSaleItemText">{{item.categoryName}}</span>
                <img class="hotSaleItemImg" :src="item.picUrl" alt="">
            </li>
        </ul>
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
.hotSale
  width 750px
  height 710px
  background white
  border-bottom 25px solid #ededed
  .hotSaleTitle
    width 750px
    height 100px
    line-height 100px
    display block
    font-size 36px
    padding 0 30px
    box-sizing border-box
  .hotGood
    clearFix()
    .hotGoodLeft,.hotGoodRight
      width 340px
      height 200px
      background #f9f3e4 
      float left
      margin-left 23px
      position relative
      .hotGoodLeftText,.hotGoodRightText
          font-size 28px
          position absolute
          left 40px
          top 80px
      &::after
          width 30px
          height 5px
          background black  
      .hotGoodLeftImg,.hotGoodRightImg
          width 200px
          height 200px
          float right 
  .hotSaleList
      width 750px
      height 410px
      padding 0 20px 20px 10px
      box-sizing border-box
      .hotSaleItem
        width 165px
        height 180px 
        background $gray
        text-align center
        float left
        margin 10px 0 0 15px
        .hotSaleItemText
          display block
          width 165px
          height 36px
          padding-top 15px
        .hotSaleItemImg
          width 120px
          height 120px            
</style>
