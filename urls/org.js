

const Router = require('koa-router')
const org = new Router()


org.get('/getBuyerAssignee', async (ctx, next) => {
    ctx.response.status = 200
    ctx.response.body = {
        state: '0000',
        data: {
            "msg": "success!",
            "state": "0000",
            "data": [{buyerAlias: "abc"}]
        }
            

    }
    await next()
})
org.get('/refreshCompanyOrgModel', async (ctx, next) => {
    ctx.response.status = 200
    ctx.response.body = {
        "msg" : "Success!",
        "state" : "0000",
    }
    await next()
})

org.get('/refreshVisibilityModel', async (ctx, next) => {
    ctx.response.status = 200
    ctx.response.body = {
        "msg" : "Success!",
        "state" : "0000",
    }
    await next()
})

module.exports = org