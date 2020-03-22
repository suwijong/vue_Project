<template>
  <div id="classfiyContainer">
      <div class="headerContainer">
        <router-link to="/search" class="searchInput">
           <i class="iconfont icon-sousuo2"></i>
           <span class="searchText">搜索商品, 共22029款好物</span>
        </router-link>
      </div>
      <div class="centerContainer">
          <div class="cLeft">
             <ul class="cateList">
                <li v-for="(itemNav, index) in cateNavData.categoryL1List" :key="index"
                    @click="handleNavIndex(index)"
                    :class="{active:index===navIndex}"
                >
                  {{itemNav.name}}
                </li>
             </ul>
          </div>
          <div class="cRight">
             <div class="content">
                <img class="rightBanner" src="https://yanxuan.nosdn.127.net/868844d3288f130c1aa808312dbbd1d8.png?quality=75&type=webp&imageView&thumbnail=0x196" alt="">  
                <ul class="picList" v-if="cateListData[0]">
                    <li v-for="(listItem, index) in cateListData[0].categoryList" :key="index">
                        <img :src="listItem.wapBannerUrl" alt="">  
                        <span>{{listItem.name}}</span>
                    </li>
                </ul>
             </div>
            
          </div>
      </div>
          
      
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
  export default {
        data() {
          return {
            navIndex:0

          }
        },
        mounted(){
          this.$store.dispatch('getCataListDataAction')
          this.$store.dispatch('getCateNavDataAction')
          // new BScroll('.cLeft',{
          //     scrollY:true
          //   })
          //滑动的函数
          this.initScroll()
        },
        methods: {
            initScroll(){
            this.leftScroll =  new BScroll('.cLeft',{
              scrollY:true,
              click:true
            }) 
            this.rightScroll = new BScroll('.cRight',{
              scrollY:true,
              click:true
            })
          },
           handleNavIndex(index){
             this.navIndex = index
           }
        },
        computed:{
          ...mapState({
             cateListData:state => state.cateListData,
             cateNavData:state => state.cateNavData
          })
        }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
#classfiyContainer 
  position relative 
  .headerContainer
    width 750px
    height 88px
    border-bottom 1px solid #ededed
    padding 0 30px
    box-sizing border-box
    display flex
    align-items center
    background white
    z-index 33
    position fixed
    left 0
    top 0
    .searchInput
      width 690px
      height 56px
      background #ededed
      display flex
      align-items center
      justify-content center
      .searchText
        font-size 28px
        color #666666
        margin-left 10px
        vertical-align middle
  .centerContainer
    padding-top 88px
    .cLeft
      width 162px
      height 1148px
      border-right 1px solid #ededed
      box-sizing border-box
      float left
      .cateList
       width 162px
       height 1150px
       padding-top 1px 
       >li
        width 162px
        height 50px
        line-height 50px
        text-align center
        margin-top 36px
        font-size 26px
        &.active
          border-left 5px solid #ab4b4b
          color  #ab4b4b
          box-sizing border-box 
    .cRight
      width 588px
      height 1148px 
      float right
      .content
        width 100%
        height 101%     
        .rightBanner
          width 528px
          height 192px
          padding 30px 0 0 30px
          box-sizing border-box 
        .picList
          width 528px
          height 648px
          >li
            width 144px
            height 216px
            float left
            margin  30px 0 0 30px
            box-sizing border-box
            >img 
              width 144px
              height 144px
            >span 
              display block
              width 144px
              height 72px
              line-height 30px
              padding 0 5px
              text-align center
              box-sizing border-box     
</style>
