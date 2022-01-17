const fs = require('fs')
const router = require('koa-router')()
const Koa = require('koa')
const cors = require('koa2-cors')
const Mock = require('mockjs')
const Random = Mock.Random

const app = new Koa()
const MainData = require('./Data/mainData/MainData.json')
const HomeData = require('./Data/homeData/HomeData.json')
const InformsData = require('./Data/userData/UserData.json')

app.use(cors({
  origin: function(ctx) { //设置允许来自指定域名请求
      // if (ctx.url === '/test') {
      return '*'; // 允许来自所有域名请求
      // }
      // return 'http://localhost:3000'; //只允许http://localhost:8080这个域名的请求
  },
  maxAge: 5, //指定本次预检请求的有效期，单位为秒。
  credentials: true, //是否允许发送Cookie
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
}))

router.get ('/all/main', async (ctx) => {
  ctx.response.body = {
    success: true,
    data: MainData
  }
})

router.get ('/all/home', async (ctx) => {
  ctx.response.body = {
    success: true,
    data: HomeData
  }
})

router.get ('/all/informs', async (ctx) => {
  ctx.response.body = {
    success: true,
    data: InformsData
  }
})


app.use(router.routes()).use(router.allowedMethods())


app.listen(9091, () => {
  console.log('server start on 9091');
})