<template>
  <div class="newProduct">
      <div class="newProductTitle">
            <span class="newProductText">新品首发</span>
            <router-link v-if="homeData.kingKongModule" 
            :to="homeData.kingKongModule.kingKongList[0].schemeUrl">
                <span class="newProductmore">更多</span>
                <i class="iconfont icon-arrow-right"></i>   
            </router-link>              
        </div>
        <ul class="newProductList">
            <li class="newProductItem" v-for="(newItem, index) in homeData.tagList" :key="index">
                <img class="newProductItemImg" :src="newItem.appListPicUrl" alt="">
                <span class="details">{{newItem.simpleDesc}}</span>
                <span class="productPrice">¥{{newItem.floorPrice}}</span>
                <span class="special">{{newItem.name}}</span>
            </li>

            <li class="newProductItem">
                <img class="newProductItemImg" src="https://yanxuan-item.nosdn.127.net/797a29814fea9f623efb204d96fd3e3e.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
                <span class="details">敷出水润仙女肌 西班牙玻尿酸深层补水面膜</span>
                <span class="productPrice">¥699</span>
                <span class="special">特价</span>
            </li>
            <li class="newProductItem">
                <img class="newProductItemImg" src="https://yanxuan-item.nosdn.127.net/ed85b7028d4620bdcd46db6405b445b4.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
                <span class="details">敷出水润仙女肌 西班牙玻尿酸深层补水面膜</span>
                <span class="productPrice">¥699</span>
                <span class="special">特价</span>
            </li> -->
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
 .newProduct
    width 750px
    height 920px
    border-bottom 25px solid #ededed
    .newProductTitle
      width 750px
      height 100px
      line-height 100px
      padding 0 30px
      box-sizing border-box
      .newProductText
        font-size 32px
      .newProductmore
        font-size 28px
        margin-left 450px
        vertical-align middle
      .iconfont
        vertical-align middle 
    .newProductList
      width 750px
      height 795px
      padding-left 10px
      box-sizing border-box
      .newProductItem
        width 216px
        height 398px
        float left
        margin-left 20px
        .newProductItemImg
          width 216px
          height 216px
          background $gray
        .details
          display block
          width 216px
          height 72px
          line-height 40px
          font-size 24px
          overflow hidden
          margin-top 10px
        .productPrice
          font-size 32px
          color red
          display block
          padding 8px 0
        .special
          padding 0 4px
          font-size 16px
          border  1px solid red
          border-radius 30%
          color $red     
</style>
