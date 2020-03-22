<template>
  <div class="timeBuy">
      <div class="timeBuyTitle">
            <span class="timeBuyText">限时购</span>
            <span class="timeBuyTime"></span>
            <span class="more">更多</span>
            <i class="iconfont icon-arrow-right"></i>
        </div>
        <ul class="timeBuyList" v-if="homeData.flashSaleModule">
            <li class="timeBuyItem" v-for="(timeBuyItem, index) in homeData.flashSaleModule.itemList" :key="index">
                <img class="timeBuyItemImg" :src="timeBuyItem.showPicUrl" alt="">
                <div class="price">
                    <span class="newPrice">¥{{timeBuyItem.activityPrice}}</span>
                    <span class="oldPrice">¥{{timeBuyItem.originPrice}}</span> 
                </div>
            </li>
        </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
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
.timeBuy
  width 750px
  height 700px
  background white
  border-bottom 25px solid #ededed
  .timeBuyTitle
      width 750px
      height 100px
      line-height 100px
      padding 0 30px
      box-sizing border-box
      .timeBuyText
        font-size 32px
      .more
        font-size 28px
        margin-left 480px
        vertical-align middle
      .iconfont
        vertical-align middle
    .timeBuyList
      width 750px
      height 600px
      padding-left 12px
      box-sizing border-box
      .timeBuyItem
        width 216px
        height 280px
        float left
        margin-left 20px
        .timeBuyItemImg
          width 216px
          height 216px
          background #ededed
        .price
          width 216px
          height 42px
          margin-left 28px
          margin-top 6px
          .newPrice
            color red
            font-size 30px
          .oldPrice
            color gray
            font-size 24px
            text-decoration:line-through 
            margin-left 10px    
</style>
