const Koa = require('koa')
const app = new Koa()

const NAME = process.env.NAME
const HOST = '0.0.0.0'
const PORT = 80

app.use(ctx => {
  if (ctx.path === '/favicon.ico') {
    return
  }
  ctx.type = 'text/html'
  ctx.body = `
    <h1>Hello, ${NAME}</h1>
    <p>Hostname: ${ctx.hostname}</p>
  `
})

app.listen(PORT, HOST, () => {
  console.log(`server is running at ${HOST}:${PORT}`)
})
