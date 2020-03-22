<template>
  <div id="homeContainer">
        <!-- toubu -->
        <HomeHeader/>
        <mt-swipe class="wrap" :auto="4000" :continuous="true">
              <mt-swipe-item class="wrapItem" v-for="(wrapItem, index) in homeData.focusList" :key="index">
                <img :src="wrapItem.picUrl" alt="">
              </mt-swipe-item>
        </mt-swipe>
        <div class="grow">
            <div class="growItem">
              <i class="iconfont icon-xuanze2"></i>
              <span>网易自营品牌</span>
            </div>
            <div class="growItem">
              <i class="iconfont icon-anquan2"></i>
              <span>30天无忧退货</span>
            </div>
            <div class="growItem">
              <i class="iconfont icon-jinbi1"></i>
              <span>48小时快速退款</span>
            </div>
        </div>
        <ul class="listWrap" v-if="homeData.kingKongModule">
            <li class="listItem" v-for="(listItem, index) in homeData.kingKongModule.kingKongList" :key="index">
                <img :src="listItem.picUrl" alt="">
                <span>{{listItem.text}}</span>
            </li>
        </ul> 
        <!-- 大图区 -->
        <BigFloor/>  
        <!--新人专享  -->
        <Newperson/>
        <!-- 热销榜 -->
        <Hotsale/>
        <!-- 限时购 -->
        <Timebuy/> 
        <!-- 新品 -->
        <Newproduct/>
        <ul class="endList">
            <li class="endItem" v-for="(endItem, index) in homeData.sceneLightShoppingGuideModule" :key="index">
               <div class="endItemTitle">{{endItem.styleItem.title}}</div>
               <div class="endItemDesc">{{endItem.styleItem.desc}}</div>
               <div class="endItemPic">
                   <img class="endItemImg" :src="endItem.styleItem.picUrlList[0]" alt="">
                   <img class="endItemImg" :src="endItem.styleItem.picUrlList[1]" alt="">
               </div>
            </li>
        </ul>
        <div class="homeBottom">
            <div class="homeBottomText">
                <span class="textApp">App下载</span> 
                <span class="textPC">电脑版</span> 
            </div>
            <div class="copLic">
                <span class="copyRight">网易公司版权所有 © 1997-</span>
                <span class="licence">食品经营许可证：JY13301080111719</span>
            </div>           
        </div>
        <div class="zhanwei"></div>
 
  </div>
</template>

<script type="text/ecmascript-6">
import HomeHeader from '../../components/Home/HomeHeader/HomeHeader'
import BigFloor from '../../components/Home/BigFloor/BigFloor'
import Hotsale from '../../components/Home/Hotsale/Hotsale'
import Newperson from '../../components/Home/Newperson/Newperson'
import Timebuy from '../../components/Home/Timebuy/Timebuy'
import Newproduct from '../../components/Home/Newproduct/Newproduct'
// import {getHomeData} from '../../api/index'
// import {getNavData} from '../../api/index'
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
export default {
  components:{HomeHeader,BigFloor,Hotsale,Newperson,Timebuy,Newproduct},
 
    mounted(){
     
        //测试异步获取数据
        // let result =await  getHomeData()
        // console.log(result);
        // let result1 =await  getNavData()
        // console.log(result1);
        //调用action方法 获取页面数据
        this.$store.dispatch('getHomeDataAction')
        //获取导航数据
        this.$store.dispatch('getNavDataAction')
      },
  
      //mapState映射数据  必须和computed使用鸭 
      computed:{
         ...mapState({
           homeData:state => state.homeData,
           navData:state => state.navData
         })
      }

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
#homeContainer
  width 100%
  height 100%
  position relative
  .wrap
    width 750px
    height 370px
    padding-top 148px
    // z-index 1
    .wrapItem
      width 750px
      height 370px
      img 
        width 750px
        height 375px 
  /deep/.mint-swipe-indicator
          width 30px
          height 6px
          background #3e3e3e
                  
  .grow
     width 750px
     height 72px
     display flex
     .growItem
       width 33.33%
       height 72px
       display flex
       align-items center
       .iconfont
         font-size 24px
         color $red
         vertical-align middle
         margin-left 25px
         margin-top 5px
        span 
          font-size 20px
          margin-left 10px
  .listWrap
    width 750px
    height 341px
    padding-bottom 30px
    border-bottom 1px solid #ededed
    .listItem
      width 110px
      height 156px
      float left
      padding 9px 20px
      img 
        width 110px
        height 110px
      span 
        width 110px
        height 36px 
        line-height 36px
  .endList
    width 750px
    height 600px
    border-bottom 25px solid #ededed
    padding-top 9px
    padding-left 26px
    box-sizing border-box
    .endItem
     width 343px
     height 264px
     background $gray
     padding 25px 0 0 25px
     box-sizing border-box
     float left
     margin 4px 0 0 4px
     .endItemTitle
        font-size 32px
     .endItemDesc
        font-size 24px
        margin-top 8px
     .endItemPic
        margin-top 10px
        .endItemImg
          width 150px
          height 150px
  .homeBottom
    width 750px
    height 244px
    background #414141
    
    box-sizing border-box
    .homeBottomText
      width 750px
      height 62px
      padding-top 54px
      text-align center
      span 
        display inline-block
        width 172px
        height 62px
        line-height 62px
        text-align center
        border 1px solid white
        color white
        font-size 24px
      .textPC
        margin-left 60px  
    .copLic 
      text-align center
      width 750px
      height 64px
      line-height 30px  
      margin-top 20px 
      .copyRight
        display block
        color #999 
      .licence
        color #999
  .zhanwei
    width 750px
    height 90px 
 
</style>
