const Koa = require("koa")
const Router = require("koa-router")

const app = new Koa()
const router = new Router()

router.get("/", ctx => {
    ctx.body = "Hello, World!"
})
router.get("/ping", ctx => {
    ctx.body = "pong"
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000)
