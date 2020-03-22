<template>
  <div id="waterFallContainer">
      <div class="waterFall" v-for="(topicItem, index) in topicData" :key="index">
            <waterfall :col='col'  :gutterWidth="gutterWidth" :data="topicItem.topics" @loadmore="loadmore" @scroll="scroll">
                <template>
                    <div class="waterFallItem" v-for="(item, index) in topicItem.topics" :key="index">
                        <img :src="item.picUrl" alt="" class="img">
                        <div class="title" >
                            {{item.title}}
                        </div>
                        <div class="anthour">
                            <div class="userInfo">
                                <img :src="item.avatar" alt="" class="avt">
                                <div class="name">{{item.nickname}}</div>
                            </div>
                            <div class="watch">
                                <i class="iconfont icon-yanjing1"></i>
                                <div class="text">{{item.readCount}}</div>
                            </div>
                        </div>
                    </div>
                </template>
            </waterfall>
        </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      data() {
          return {
              col:2,
              topicData:[],     
          }
      },
      async mounted(){
          //获取瀑布流首屏数据
          let result = await this.$API.getWaterFallData()
        //   console.log('111',result);
          this.waterFallData = result.data.navList
          //获取瀑布流 触底加载数据
          let topic = await this.$API.getTopicData()
        //   console.log(topic);
          this.topicData = topic.data.result
      },
         methods:{
            scroll(scrollData){
                // console.log(scrollData)
            },
	          switchCol(col){
	            this.col = col
	            // console.log(this.col)
	        },
	          loadmore(index){
	            this.data = this.data.concat(this.data)
	      }
	    },


         computed:{
	        itemWidth(){  
	            return (138*0.5*(document.documentElement.clientWidth/375)) // #rem布局 计算宽度
	      },
	         gutterWidth(){
	            return (9*0.5*(document.documentElement.clientWidth/375))	//#rem布局 计算x轴方向margin(y轴方向的margin自定义在css中即可)
	      }
	    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
#waterFallContainer
  width 750px
  padding-top 40px
  background rgb(238,238,238)
  .waterFall
    width 100%
    height 100%
    padding  30px 20px 0
    box-sizing border-box
    .waterFallItem
        background-color #fff
        border-radius 16px
        overflow hidden
        margin-bottom 20px
        >img
            width 345px
        .title
            width 343px
            box-sizing border-box
            padding 18px 16px 0
            font-size 28px
            line-height 40px
            color #333
        .anthour
            width 343px
            height 89px
            box-sizing border-box
            padding 17px 16px 12px
            display flex
            justify-content space-between
            .userInfo
                height 48px
                display flex
                .avt
                    width 48px
                    height 48px
                    border 1px solid #d9d9d9
                    border-radius 24px
                .name
                    height 48px
                    color #7f7f7f
                    font-size 24px
                    line-height 48px
                    margin-left 8px
            .watch
                height 48px
                display flex
                >.iconfont
                  font-size 32px
                    
                .text                          
                    height 32px
                    line-height 32px
                    font-size 24px     
                    color #7f7f7f 

</style>



