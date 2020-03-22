<template>
  <div id="waterfall-wrap">
    <waterfall :col="col" 
      :data="lazyLoadList" 
      :width="wateFallWidth" 
      :gutterWidth="wfGutterWidth" 
      @scroll="scroll"
      @loadmore="loadmore"
    >
      <template>
        <div class="waterfall-ad"><img src="https://yanxuan.nosdn.127.net/87f3077c32a6946ae644f6a6a8205fc1.png?imageView&thumbnail=345y191.66666666666669&quality=95" alt=""></div>
        <div class="cell-item" v-for="(firstItemObj, index) in (lazyLoadList)" :key="index">
          <img :src="firstItemObj.picUrl" alt="加载错误">
          <div class="item-body">
            <div class="item-desc">{{firstItemObj.title}}</div>
            <div class="item-footer">
              <div
                v-if="firstItemObj.avatar"
                class="avatar"
                :style="{backgroundImage : `url(${firstItemObj.avatar})` }"
              ></div>
              <div class="name">{{firstItemObj.nickname}}</div>
              <div class="like" >
                <i class="iconfont icon-kanjian"></i>
                <div class="like-total">123k</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </waterfall>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
        return {
            lazyLoadList: [],
            col: 2,
            isLoading: false,
            wateFallWidth: 172, 
            wfGutterWidth: 8,
            page: 0, //页数
            size: 3 //加载个数
        }
    },
    async mounted() {
        //发送ajax请求，获取瀑布流首屏数据
        let firstScreenData = await this.$API.getWaterFallData();
        // console.log(firstScreenData.data);
        this.lazyLoadList = firstScreenData.data.reduce((preArr, itemObj)=>{
            preArr.push(...itemObj.topics);
            // console.log('newArr====',preArr);
            return preArr;
        }, []);
    },
    methods: {
      loadmore(){
        console.log('触底加载。。。。');
      },
      scroll(scrollData){
        // console.log('scrollData=====', scrollData);
        let minScrollTop = scrollData.scrollTop;
        console.log('=====',scrollData.scrollTop)
        if(this.timeId) clearTimeout(this.timeId)
        this.timeId = setTimeout(async () => {
          this.page++;
          if(scrollData.scrollTop >= minScrollTop){
            let lazyLoadRes = await this.$API.getWaterFallLazyLoad(this.page, 3);
              // console.log('lazyLoadRes====', lazyLoadRes.data.result);
            let lazyRes = lazyLoadRes.data.result.reduce((preArr, itemObj)=>{
              preArr.push(...itemObj.topics);
              // console.log('newArr====',preArr);
              return preArr;
            }, []);
            // console.log('======', res2);
            if(this.page >= 1){
              this.lazyLoadList.push(...lazyRes);
            }
          }
        }, 300);
        
      }
    }
  }
</script>

<style lang="stylus" scoped>
#waterfall-wrap
  width 100%
  background-color #eee  
  padding 30px 20px 0 
  box-sizing border-box
  //广告图片
  .waterfall-ad
    width 344px
    height 192px
    margin-bottom 20px
    box-sizing border-box
    >img 
      width 100%
      height 100%
      border-radius 10px
  .cell-item
    width 100%
    // float left
    background #fff
    border 2px solid #F0F0F0
    border-radius 12px
    margin-bottom 20px
    // margin-left 20px
    overflow hidden
    // box-sizing border-box
    >img 
      width 100%
      height auto
      display block
    .item-body
      .item-desc
        padding 18px 16px 0
        font-size 28px
        color #333
        line-height 38px
        text-align justify
        overflow hidden
        text-overflow ellipsis
        display -webkit-box
        -webkit-line-clamp 2
        -webkit-box-orient vertical
      .item-footer
        margin-top 22px
        padding 0 16px 24px
        position relative
        display flex
        align-items center
        .avatar
          width 44px
          height 44px
          border-radius 50%
          background-repeat no-repeat
          background-size contain
        .name
          max-width 240px
          text-overflow ellipsis
          overflow hidden
          white-space nowrap
          margin-left 10px
          font-size 14px
          color #999
        .like
          position absolute
          right 0
          padding-right 15px
          display flex
          align-items center
          &.active
            i 
            .like-total
              color #FF4479
          i 
            width 28px
            display block
            padding-top 8px
            marign-right -5px
          .like-total
            margin-left 10px
            font-size 12px
            color #999
 
</style>