<template>
    <div class="cRight" v-if="cateObj">
        <div class="rightCategoryList" v-show="cateObj.categoryList">
          <img class="rightBanner" src="https://yanxuan.nosdn.127.net/868844d3288f130c1aa808312dbbd1d8.png?quality=75&type=webp&imageView&thumbnail=0x196" alt="">  
          <ul class="picList" v-if="cateObj">
              <li  v-for="(listItem, index) in cateObj.categoryList" :key="index">
                  <img :src="listItem.wapBannerUrl" alt="">  
                  <span>{{listItem.name}}</span>
              </li>
          </ul>
        </div>
        <div class="rightSubCateList" v-show="cateObj.subCateList">
            <img class="rightSubBanner" src="https://yanxuan.nosdn.127.net/761877bc4e2cf50d7c424a8a7e6378bf.jpg?quality=75&type=webp&imageView&thumbnail=0x196" alt="">
            <div class="headerOne" v-if="cateObj.subCateList">{{cateObj.subCateList[0].name}}</div>
            <ul class="listOne" v-if="cateObj.subCateList">
              <li v-for="(item, index) in cateObj.subCateList.slice(0,4)" :key="index">
                <img :src="item.wapBannerUrl" alt="">
                <span>{{item.name}}</span>
              </li>   
            </ul>
            <div class="headerOne" v-if="cateObj.subCateList">{{cateObj.subCateList[4].name}}</div>
            <ul class="listOne" v-if="cateObj.subCateList">
              <li v-for="(item, index) in cateObj.subCateList.slice(4,7)" :key="index">
                <img :src="item.wapBannerUrl" alt="">
                <span>{{item.name}}</span>
              </li>   
            </ul>
              <div class="headerOne" v-if="cateObj.subCateList">{{cateObj.subCateList[7].name}}</div>
            <ul class="listOne" v-if="cateObj.subCateList">
              <li v-for="(item, index) in cateObj.subCateList.slice(7,12)" :key="index">
                <img :src="item.wapBannerUrl" alt="">
                <span>{{item.name}}</span>
              </li>   
            </ul>
        </div>    
    </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        cateObj:{},//查找到对应的数据对象
      }
    },
    computed:{
      ...mapState({
        cateListData:state => state.cateListData,
      })
    },
    mounted(){
      this.$store.dispatch('getCataListDataAction')
      //1,获取路由参数 this.$route.params.id  这个id是个string  数据源里时number类型 所以*1转数字
      //  console.log(this.cateListData);
      //2.根据参数找到对应的对象 页面加载对比id 只能进行一次id变化了一次 所以要监视 路由变化则进行数据查找
      this.cateObj = this.cateListData.find(item => item.id === this.$route.params.id*1)
      //3,显示数据
      
      //  滑动
         new BScroll('.cRight',{
              scrollY:true,
              click:true
            })
    },
    watch:{
      //对路由进行监视
      $route() {
        this.cateObj = this.cateListData.find(item => item.id === this.$route.params.id*1)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.cRight
  width 588px
  height 1148px
  .rightCategoryList
    // width 100%  
    width 588px
    height 1150px
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
  .rightSubCateList
    width 100% 
    // height 3000px 
    padding 30px  
    box-sizing border-box
    .rightSubBanner
      width 528px
      height 192px
      box-sizing border-box 
    .headerOne
      width 528px
      height 51px
      color #333
      font-size 28px
      font-weight 700
      margin-top 35px 
    .listOne
      width 528px
      height 432px
      >li
        width 144px
        height 216px
        float left
        margin-left 15px
        >img 
         width 144px
         height 144px
        >span
         display inline-block  
         width 144px
         height 72px
         color #333
         font-size 24px
         text-align center
         margin-top 15px                   
 
</style>
