import {
    getHomeData,
    getNavData,
    getCataListData,
    getCateNavData,
    getSearchData 
} from '../api'

import {
    SAVE_HOMEDATA,
    SAVE_NAVDATA,
    SAVE_CATELISTDATA,
    SAVE_CATENAVDATA,
    SAVE_SEARCHDATA
} from './mutations-type'


export default {
        //获取页面数据
    async getHomeDataAction({commit}){
        //发送异步请求获取数据
        let result = await getHomeData()
        
        if (result.code === 0) {
            //调用mutations 更新状态数据
            commit(SAVE_HOMEDATA,result.datas)
        }
    },

    async getNavDataAction({commit}){
        let result = await getNavData()

        if (result.code === 0) {
            commit(SAVE_NAVDATA,result.datas) 
        }
    },
    
    async getCataListDataAction({commit}){
        let result = await getCataListData()
        // console.log('LIST',result);
        if (result.code === 0) {
            commit(SAVE_CATELISTDATA,result.datas)
        }
    },

    async getCateNavDataAction({commit}){
        let result = await getCateNavData()
        // console.log('NAV',result);
        if (result.code === 0) {
            commit(SAVE_CATENAVDATA,result.datas)
        }
    },

    // async getSearchDataAction({commit}){
    //     // console.log('1111');
    //     let result = await getSearchData()
    //     // console.log('hahah ');
    //     // console.log(result);
    //     if (result.code === 200) {
    //         commit(SAVE_SEARCHDATA,result.data)
    //     }
    // },

    
}