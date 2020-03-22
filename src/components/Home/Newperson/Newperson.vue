<template>
  <div class="newPer">
        <span class="newPerText">--新人专享礼--</span>
        <div class="npBody">
            <div class="npBodyLeft">
                <span class="leftText">新人专享礼包</span>
                <img class="leftImg" src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
            </div>
            <div class="npBodyRight">
                <div class="npbTop">
                    <span class="npbTopText1" v-if="homeData.indexActivityModule">{{homeData.indexActivityModule[0].title}}</span> 
                    <span class="npbTopText2">今日特价</span> 
                    <img class="npbImg" v-if="homeData.indexActivityModule" :src="homeData.indexActivityModule[0].showPicUrl" alt="">
                </div>
                <div class="npbBottom">
                    <span class="npbBottomText1">新人拼团</span> 
                    <span class="npbBottomText2">1元起包邮</span> 
                </div>
           </div>
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
.newPer
    width 750px
    height 558px
    background #ededed
    padding 25px 0
    .newPerText
      display block
      width 750px
      height 90px
      line-height 90px
      background white
      text-align center
      font-size 36px
    .npBody
      width 750px
      height 465px
      background white
      .npBodyLeft
        width 343px
        height 434px
        background #F9E9CF
        padding 30px 0 0 30px
        display inline-block
        box-sizing border-box
        margin-left 30px
        .leftText
          width 343px
          height 78px
          font-size 32px
        .leftImg  
          width 258px
          height 257px 
          margin-top 25px
          margin-left 8px
      .npBodyRight
        width 343px
        height 434px 
        float right 
        margin-right 29px
        .npbTop
          background #F9E9CF
          width 343px
          height 215px
          padding 30px 0 0 30px
          box-sizing border-box
          position relative
          .npbTopText1
            display block
            font-size 36px
          .npbTopText2
            display block
            margin-top 12px
          .npbImg
            width 200px
            height 200px
            position absolute
            right 0
            bottom 0 
        .npbBottom
          width 343px
          height 215px
          background rgb(255, 236, 194)
          margin-top 4px 
          padding 30px 0 0 30px
          box-sizing border-box
          .npbBottomText1
            display block
            font-size 36px
          .npbBottomText2
            display block
            width 120px
            height 32px
            line-height 32px
            text-align center
            background #cbb693
            margin-top 12px
            font-size 10px 
            color white             
 
</style>
