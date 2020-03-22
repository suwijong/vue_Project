<template>
  <div class="waterfall">
    <div class="box" @scroll="getScrollTop" >
      <div class="item" v-for="(item,index) in itemList" :key="index" >
        <div class="imgWrap">
          <img v-lazy="item.picUrl" class="banner"/>
        </div>
        <div class="txt">{{item.title}}</div>
        <div class="placeHolder"></div>
        <div class="userInfo">
          <div class="left">
            <img class="userAvatar" v-lazy="item.avatar" alt="">
            <div class="userName">{{item.nickname}}</div>
          </div>
          <div class="right">
            <i class="iconfont iconxiaoyanjing"></i>
            <div class="rightTxt">{{Math.floor(item.readCount/1000)+'K'}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

import { Toast } from 'mint-ui'
  export default {
    data() {
      return {
        itemList:[],
        count:0
      }
    },
   async  mounted(){
                //获取瀑布流 触底加载数据
        let topic = await this.$API.getTopicData()
        //   console.log(topic);
        this.topicData = topic.data.result
    
      this.$nextTick(function () {
        window.addEventListener('scroll', this.onScroll);
      })
    },

    watch:{
      'worthList'(){
        this.$nextTick(()=>{
          let result = []
          this.topicData.find(item =>{
            if(Array.isArray(item.topics)){
              result.push(...item.topics)
            }
          })
          result.map(item => {
            if(item){
              item.appBanHeight = item.appBanHeight/10
              item.appBanWidth = item.appBanWidth/10
            }
          })
          this.itemList = result
        })
      }
    },
    methods:{
      // 获取滚动条当前的位置
      getScrollTop() {
          let scrollTop = 0
          if (document.documentElement && document.documentElement.scrollTop) {
              scrollTop = document.documentElement.scrollTop
          } else if (document.body) {
              scrollTop = document.body.scrollTop
          }
          return scrollTop
      },
      // 获取当前可视范围的高度
      getClientHeight() {
          let clientHeight = 0
          if (document.body.clientHeight && document.documentElement.clientHeight) {
              clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight)
          } else {
              clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight)
          }
          return clientHeight
      },
      // 获取文档完整的高度
      getScrollHeight() {
          return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
      },
      // 滚动事件触发下拉加载
      onScroll() {
          if (this.getScrollHeight() - this.getClientHeight() - this.getScrollTop() <= 0) {
              if (this.count <= 5) {
                  this.count++
                  // 调用请求函数
                //   console.log('发送请求')
                  this.topicData =this.topicData
              } else {
                  Toast('没有更多内容了...')
              }
          }
      },
    },
  }
</script>

<style lang="stylus">
.waterfall
  margin-bottom 50px
  .box 
    margin 10px 10px 0
    column-count 2
    column-gap 10px
    .item
      overflow hidden
      margin-bottom 10px
      border-radius 10px
      background-color #fff
      break-inside avoid
      .imgWrap
        width 100%
        height 100%
        .banner
          width 100%
          height 100%
      .txt
        height 29px
        padding 8px 6px 0
        font-size 14px
        text-align left
        box-sizing border-box
        text-overflow ellipsis
        white-space nowrap
        overflow hidden
      .placeHolder
        height 8px
      .userInfo
        display flex
        justify-content space-between
        height 45px
        padding 12px 5px 10px
        border-top 1px solid #d9d9d9
        .left
          display flex
          align-items center
          .userAvatar
            border-radius 50%
            height 24px
            width 24px
          .userName
            margin-left 5px
            color #ccc
        .right
          display flex
          align-items center
          .iconfont
            font-size 14px
          .rightTxt
            margin-left 3px
            color #7f7f7f
</style>

