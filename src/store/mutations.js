import {
    SAVE_HOMEDATA,
    SAVE_NAVDATA,
    SAVE_CATELISTDATA,
    SAVE_CATENAVDATA,
    SAVE_SEARCHDATA
   } from './mutations-type'


export default {
   [SAVE_HOMEDATA](state,homeData){
       //直接更新状态数据 从actions哪里获取到的
      state.homeData = homeData
   },

   [SAVE_NAVDATA](state,navData){
      state.navData = navData
   },

   [SAVE_CATELISTDATA](state,cateListData){
      state.cateListData = cateListData
   },

   [SAVE_CATENAVDATA](state,cateNavData){
      state.cateNavData = cateNavData
   },
   // [SAVE_SEARCHDATA](state,searchData){
   //    // console.log(searchData);
   //    state.searchData = searchData
   // }

}