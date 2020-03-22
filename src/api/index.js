import ajax from './ajax'

//发送请求 获取主页数据
export const getHomeData = ()=>ajax({
    url:'/api/home'
})

//获取滑动导航栏数据
export const getNavData = ()=>ajax({
    url:'/api/nav'
})

//获取catalist数据
export const getCataListData = ()=>ajax({
    url:'/api/catelist'
})

//获取catenav数据
export const getCateNavData =()=>ajax({
    url:'/api/catenav'
})

//获取搜索数据
export const getSearchData = ()=>ajax({
    method:'POST',
    url:'/wy/xhr/search/init.json'
})

//获取值得买的数据
export const getWorthbuyData = ()=>ajax({
    method:'GET',
    url:'/wy/topic/v1/know/navWap.json'
})

//获取瀑布流首屏数据
export const getWaterFallData = ()=>ajax({
    method:'GET',
    url:'/wy/topic/v1/know/navWap.json'
})

//获取瀑布流 触底加载数据
export const getTopicData = ()=>ajax({
    method:'GET',
    url:'/wy/topic/v1/find/recAuto.json'
})
