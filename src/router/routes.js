import Home from '../pages/home/home.vue'
import Classfiy from '../pages/classfiy/classfiy.vue'
import Buy from '../pages/buy/buy.vue'
import Profile from '../pages/profile/profile.vue'
import Shop from '../pages/shop/shop.vue'
import Search from '../pages/search/search.vue'
import Login from '../pages/login/login.vue'

//classfiy的二级路由
import ClassfiyList from '../pages/classfiy/classfiyRight/classRight.vue'



export default [
   
    {
       path:'/home',
       component:Home,
       meta:{
           isShowFooter:true
       }
    },
    {
        path:'/classfiy',
        component:Classfiy,
        meta:{
            isShowFooter:true
        },
        children:[
            {
                path:'/classfiy/right/:id', //路由传参 占位 不然页面丢失
                component:ClassfiyList,
                meta:{
                    isShowFooter:true
                },
            }
        ]
     },
     {
        path:'/buy',
        component:Buy,
        meta:{
            isShowFooter:true
        }
     },
     {
        path:'/shop',
        component:Shop,
        meta:{
            isShowFooter:true
        }
     },
     {
        path:'/profile',
        component:Profile,
        meta:{
            isShowFooter:true
        },
 
     },
     {
        path:'/login',
        component:Login,
        meta:{
            isShowFooter:false
        },
     },
     {
         path:'/search',
         component:Search
     },
     {
        path:'/',
        redirect:'/profile'
        
     },
]