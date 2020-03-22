let Koa = require('koa')
let KoaRouter = require('koa-router');


const app = new Koa();
const router = new KoaRouter();

//测试数据
let demoData = require('./datas/demo');
router.get('/demo', (ctx, next) => {
  ctx.body = demoData
});

//1,主页数据接口
let homeData = require('./datas/index.json')
router.get('/home',(ctx,next)=>{
  ctx.body = {
    code:0,
    datas:homeData
  }
})

//滑动导航nav的数据
let navData = require('./datas/indexCateModule.json')
router.get('/nav',(ctx,next)=>{
  ctx.body = {
    code:0,
    datas:navData
  }
})
//cateList的数据
let cateListData = require('./datas/cateLists.json')
router.get('/catelist',(ctx,next)=>{
  ctx.body = {
    code:0,
    datas:cateListData
  }
})
//cateNav的数据
let cateNavData = require('./datas/cateNavDatas.json')
router.get('/catenav',(ctx,next)=>{
  ctx.body = {
    code:0,
    datas:cateNavData
  }
})

app
  .use(router.routes())
  .use(router.allowedMethods())



app.listen('3001', () => {
  console.log('服务器地址: http://localhost:3001');
})
