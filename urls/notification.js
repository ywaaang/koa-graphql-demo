const Router = require('koa-router')
const notification = new Router()


notification.post('/getNotificationByPage', async (ctx, next) => {
    ctx.response.status = 200
    ctx.response.body = {
        state: '0000'
    }
    await next()
})


module.exports = notification