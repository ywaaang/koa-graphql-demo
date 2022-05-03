const Router = require('koa-router')
const user = new Router()

// 

user.get('/getBroadcast', async (ctx, next) => {
    ctx.response.status = 200
    ctx.response.body = {
        state: '0000'
    }
    await next()
})

user.post('/dologin', async (ctx, next) => {
    ctx.response.status = 200
    ctx.response.body = {
        state: '0000'
    }
    await next()
})

user.get('/logout', async (ctx, next) => {
    ctx.response.status = 200
    ctx.response.body = {
        state: '0000'
    }
    await next()
})


user.get('/info', async (ctx, next) => {
    ctx.response.status = 200
    ctx.response.body = {
        state: '0000',
        data: {
            "userId" : "146",
            "username" : "icowmg@opten.email",
            "userType" : "03",
            "roleId" : "931",
            "firstname" : "wwew",
            "lastname" : "sdsdf",
            "jobtitle" : "qwewqe",
            "email" : "icowmg@opten.email",
            "membershipFlag" : "2",
            "subscriptionStatus" : "0",
            "subscriptionValidBy" : "",
            "trialEndTime" : "03-26-2020 17:46:36",
            "buyerId" : "BYR20200225174619854",
            "mobileNum" : "123213213",
            "avatar" : "https://gif-avatars.com/img/45x45/addy.gif",
            "sysCompanyId" : "SYSCMP20200225174619854",
            "sysCompanyName" : "qqqqqqqq",
            "isSuperAdmin" : "1",
            "orgCode" : "ORG20200225174619854",
            "orgName" : "qqqqqqqq",
            "orgLevel" : "1",
            "orgType" : "03",
            "orgStatus" : "1",
            "mountStatus" : "1",
            "integrationAccount" : 1
          }

    }
    await next()
})

user.get('/getUsageReport', async (ctx, next) => {
    ctx.response.status = 200
    ctx.response.body = {
        state: '0000'

    }
    await next()
})

module.exports = user