<template>
  <div id="searchContiner">
     <div class="searchHeader">
       <input v-model="searchContent" 
              @keyup="goSerach" 
              class="searchInput" type="text"
              v-if="searchData.defaultKeyword" 
              :placeholder="searchData.defaultKeyword.keyword">
       <i class="iconfont icon-sousuo"></i>
       <span class="close" @click="handleClear" v-show="searchContent">
          <i class="iconfont icon-quxiao1"></i>
       </span>
       <span class="back" @click="$router.back()">取消</span>
       <p>{{searchContent}}</p>
     </div>
     <div class="historyANDhotsearch" v-show="isShowHistoryHot">
         <div class="historyList" v-show="isShowHistory">
         <div >
             <span class="historyTitle">历史记录</span>
             <i class="iconfont icon-shanchu1" @click="clearHistory"></i>     
         </div>
         <ul class="historyNavList">
             <li class="historyItem" v-for="(item, index) in viewHistoryData" :key="index">{{item}}</li>
             <!-- <li class="historyItem">华为手机</li> -->
         </ul>
        </div>
        <div class="hotSearch">
            <div>
              <span>热门搜索</span>
            </div>
            <ul class="hotSearchList">
                <li v-for="(hotItem, index) in searchData.hotKeywordVOList"  :key="index">
                  <a  :href="hotItem.schemeUrl" 
                      :class="{active:hotItem.highlight == 1}">
                    {{hotItem.keyword}}
                  </a>
                  
                </li>
                <!-- <li>疫情上新快报</li>
                <li>宅家网红款 不粘锅</li>
                <li>领66元开年补贴</li>
                <li>领66元开年补贴</li> -->
            </ul>
        </div>
     </div>
     
  </div>
</template>

<script type="text/ecmascript-6">
// import {mapState} from 'vuex'
  export default {
    data() {
      return {
        searchData:{},//搜索数据
        searchContent:'',//搜索内容
        historyData:[],//保存搜索记录
        viewHistoryData:[],//显示历史记录
        isShowHistory:false,//历史记录是否显示
        isShowHistoryHot:true,//历史记录和推荐是否显示
      }
    },
    methods:{
      handleClear(){
        this.searchContent = ''
        this.isShowHistoryHot = true
      },
      goSerach(e){
        if (e.keyCode == 13) {
            alert('sousuol')
            this.$router.push('/home')
            let historyDataItem = this.searchContent
            console.log(historyDataItem);
            //空格不存到数组中
            !!historyDataItem && this.historyData.push(historyDataItem)
            // console.log(this.historyData);
        } else {
          // console.log('hhh');
          //搜索时历史记录和推荐 隐藏 
             this.isShowHistoryHot=false
            if (this.searchContent != '') {
              this.isShowHistoryHot=false
            } else {
              this.isShowHistoryHot=true
            }
          
        }
        // this.searchContent = ''&& (this.isShowHistoryHot =  true)
   
      },
      //qingchu 历史记录
      clearHistory(){
        this.historyData = []
        this.isShowHistory = false
        sessionStorage.removeItem('searchHistory')
        
      },
      // view(){
      //   if (this.searchContent != '') {
      //     this.isShowHistoryHot=false
      //   }
      // }
    },
    async mounted(){
      //  this.$store.dispatch('getSearchDataAction')
      let result =await this.$API.getSearchData()
      console.log('222',result.data);
       
       this.searchData = result.data
       console.log('111',this.searchData );
       //从sessionStorage中取出数据
       let getSession = JSON.parse(sessionStorage.getItem('searchHistory'))
       this.viewHistoryData = getSession
       console.log(this.viewHistoryData);
       //判断history隐藏
       if (this.viewHistoryData) {
          this.isShowHistory = true 
       } else {
         this.isShowHistory = false
       }
    },
    computed:{
      // ...mapState({
      //   searchDatas:state => state.searchData
      // }),
    },
    beforeDestroy(){
      let data = this.historyData
      //里面有数据才存
      if (data.length) {
         sessionStorage.setItem('searchHistory',JSON.stringify(data)) 
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
#searchContiner
  height 1334px
  width 750px
  background #ededed
  .searchHeader
    width 750px
    height 88px
    line-height 88px
    padding 0 30px
    box-sizing border-box
    position relative
    background white
    >.iconfont
      position absolute
      left 6%
      top 3px
      font-size 36px
    .searchInput
      width 604px
      height 56px
      background #ededed
      padding-left 70px
      box-sizing border-box
      outline: none 
    .close 
      position absolute
      right 19%
      font-size 24px
      color #d3d3d3
    .back
      color #333
      margin-left 30px 
  .historyANDhotsearch    
    .historyList
      width 750px
      height 199px
      padding 0 30px 30px
      box-sizing border-box 
      background white
      border-bottom 25px solid #ededed  
      >div
        width 690px
        height 90px
        line-height 90px    
        >span 
          font-size 28px
          color #999999
        .iconfont
          float right 
      .historyNavList
        .historyItem
          float left
          height 47px
          line-height 47px
          padding 0 15px
          border  1px solid #999
          color #333
          font-size 24px
          margin 0 32px 32px 0
    .hotSearch
      width 750px
      height 515px
      padding 0 20px 20px 20px
      box-sizing border-box
      background white 
      border-bottom 25px solid #ededed  
      >div
        width 690px
        height 90px
        line-height 90px    
        >span 
          font-size 28px
          color #999999
      .hotSearchList
        >li
          float left
          height 47px
          margin 0 32px 32px 0
          a
            color #333
            display inline-block
            border  1px solid #999
            height 47px
            line-height 47px
            padding  0 15px
            font-size 24px
            &.active
              color $red
              border-color $red 

             
      
 
</style>
