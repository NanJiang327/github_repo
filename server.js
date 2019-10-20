const Koa = require("koa")
const Router = require("koa-router")
const Next = require("next")

const dev = process.env.NODE_ENV !== 'production';
const app = Next({ dev })
const hanlde = app.getRequestHandler()



app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()

  router.get('/a/:id', async (ctx) => {
    const id = ctx.params.id
    await hanlde(ctx.req, ctx.res, {
      pathname: '/a',
      query: { id }
    }) 
    ctx.response = false
  })

  server.use(router.routes())
 
  /* ctx是请求的所有内容, next 是调用下一个中间件 */
  server.use(async (ctx, next) => {
     await hanlde(ctx.req, ctx.res) 
     ctx.response = false
  })


  server.listen(3000, () => {
    console.log("KOA server is listening on 3000")
  })
})