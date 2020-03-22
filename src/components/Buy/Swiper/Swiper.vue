<template>
  <div id="swiperContainer">
      <img class="imgText" src=" https://m.you.163.com/topic/index/img/topic_logo.c2284970.png" alt="">
      <span class="text">严选好物&nbsp; 用心生活</span>
      <img class="backgroundImg" src="https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png" alt=""> 
      <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(newListItem, index) in newNavList" :key="index">
                 <a :href="listItem.columnUrl" class="swiper-item" v-for="(listItem, index) in newListItem" :key="index">
                     <div class="itemImg">
                        <img :src="listItem.picUrl" alt=""> 
                     </div>
                     <div class="topText">{{listItem.mainTitle}}</div>
                     <div class="bottomText">{{listItem.viceTitle}}</div>
                 </a>

              </div>
          </div>
          <!-- 小圆点 -->
           <div class="swiper-pagination"></div>
      </div> 
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  import _ from 'lodash'
  export default {
      data() {
          return {
              navList:[],//轮播图数据的初始化
          }
      },
    async mounted(){
        //获取数据
        let result =await this.$API.getWorthbuyData()
        // console.log(result.data);
        //将数据更新至state
        this.navList = result.data.navList

        //轮播图
        //new Swiper的时机不对 导致不能滑动小圆点消失  new 早了数据还没到 
        //用watch监视 监视navList 等他有变化再去new 
        let myswiper = new Swiper('.swiper-container', {
            pagination: {
              el: '.swiper-pagination',
            },
            loop: true
          })
    },
    computed:{
        //在计算属性中将得到的一维数组转化成二维数组 lodash
        newNavList(){
            return _.chunk(this.navList,8)
        }
    },
    watch:{
        navList(){ //监视navList 等他有变化再去new 
            // $nextTick 保证下一次组件加载完毕执行 这是个实例身上内置的方法
            this.$nextTick(()=>{
                    new Swiper('.swiper-container', {
                    pagination: {
                    el: '.swiper-pagination',
                    },
                    loop: true
                })
            })
        }
    }

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../../common/stylus/mixins.styl"
#swiperContainer
  width 750px
  height 685px
  padding-top 88px 
  position relative
  .imgText
    width 130px
    height 68px
    position absolute
    top 140px
    left 10px
  .text
    font-size 30px
    color white
    position absolute
    left 150px
    top 170px
  .backgroundImg
    width 750px
    height 518px
  .swiper-container
    width 710px
    height 540px
    background white
    border-radius 15px
    position absolute
    bottom 0
    left 20px
    padding-top 20px
    box-sizing border-box
    .swiper-wrapper
      width 100%
      height 100%
      .swiper-slide
        display flex
        justify-content center
        align-items flex-start
        flex-wrap wrap
        height 100%
        .swiper-item
          width 168px
          height 201px
          text-align center
          .itemImg
            width 120px
            height 120px
            margin-left 20px
            img 
              width 120px
              height 120px
          .topText
            width 168px
            height 40px
            font-size 28px
            color #333
            margin-top 20px
          .bottomText
            width 168px
            height 30px
            font-size 24px
            color #999  
    /deep/.swiper-pagination
      >span.swiper-pagination-bullet-active
        background $red 
        width 40px
        height 5px                          

</style>
