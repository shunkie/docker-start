const Koa = require('koa')
const Redis = require('ioredis')

const PORT = 8080

const app = new Koa()
const redis = new Redis({
  port: 6379,
  host: 'redis'
})

app.use(async (ctx) => {
  const views = await redis.incr('views')
  ctx.type = 'text/html'
  ctx.body = `
    <h1>This page has been visited ${views} times.</h1>
  `
})

app.listen(PORT, () => {
  console.log('server is running...')
})
