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
             <ul class="cateList" v-if="cateNavData">
                <li v-for="(itemNav, index) in cateNavData.categoryL1List" :key="index">
                  <router-link :to="`/classfiy/right/${itemNav.id}`">
                    {{itemNav.name}}
                  </router-link> 
                  
                </li>
             </ul>
          </div>
          <div class="cRight">
            <!-- 右侧组件注册为二级路由 -->
             <router-view></router-view>
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
          //  setTimeout(()=>{
            // console.log('666',this.cateNavData);
          //页面加载时跳转到右侧的第一个页面 不然内容区右侧无内容
          // this.navList = this.cateNavData.categoryL1List
          // this.$router.push(`/classfiy/right/${this.navList[0].id}`)
          this.$router.push('/classfiy/right/11')
          //  },1000)
         
        },
        methods: {
            initScroll(){
            this.leftScroll =  new BScroll('.cLeft',{
              scrollY:true,
              click:true
            }) 
            // this.rightScroll = new BScroll('.cRight',{
            //   scrollY:true,
            //   click:true
            // })
          },
        },
        computed:{
          ...mapState({
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
    width 750px
    display flex
    // position relative
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
        position relative
        a
         &.router-link-active
          color $red
          &:after
            content ''
            width 5px
            height 50px
            background-color $red
            position absolute
            left 0

    .cRight   
      // position fixed
      // right 0
</style>
