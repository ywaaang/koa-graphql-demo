const Router = require('koa-router')
const supplier = new Router()

// /supplier
supplier.get('/getSupplier', async (ctx, next) => {
    ctx.response.status = 200
    ctx.response.body = {
        "msg" : "Success!",
        "state" : "0000",
        "data" : [ {
          "supplierId" : "1aa67686566011e9b3a416e67761ea5e",
          "creationBuyerId" : "BYR20190403182045390",
          "supplierName" : "takalia",
          "contactName" : "tekalia wang",
          "companyId" : "CMP20190403183037544",
          "companyName" : "sirp",
          "email" : "yanbin.wang@sirp.ca",
          "jobTitle" : "dev",
          "notes" : null,
          "address" : null,
          "repeatTime" : "19:00",
          "repeatDay" : "WED",
          "repeatWeekInterval": "1",
          "recurMin" : null,
          "recurHour" : null,
          "recurDate" : null,
          "recurMonth" : null,
          "recurDay" : null,
          "recurTimezone" : "EST",
          "cronEnable" : "1",
          "supplierCountry" : null
        } ]
      }
      
    await next()
})

// /supplier
supplier.post('/getSupplierByPage', async (ctx, next) => {
    ctx.response.status = 200
    ctx.response.body = {
        "msg" : "Success!",
        "state" : "0000",
        "data" : [ {
          "contactOwner": "a,b,c,d",
          "supplierId" : "1aa67686566011e9b3a416e67761ea5e",
          "creationBuyerId" : "BYR20190403182045390",
          "supplierName" : "takalia",
          "contactName" : "tekalia wang",
          "companyId" : "CMP20190403183037544",
          "companyName" : "sirp",
          "email" : "yanbin.wang@sirp.ca",
          "jobTitle" : "dev",
          "notes" : null,
          "address" : null,
          "repeatTime" : "19:00",
          "repeatDay" : "WED",
          "repeatWeekInterval": "1",
          "recurMin" : null,
          "recurHour" : null,
          "recurDate" : null,
          "recurMonth" : null,
          "recurDay" : null,
          "recurTimezone" : "EST",
          "cronEnable" : "1",
          "supplierCountry" : null
        }, {
            "contactOwner": "a,b,c,d",
            "supplierId" : "1aa67686566011e9b3a416e67761ea5e",
            "creationBuyerId" : "BYR20190403182045390",
            "supplierName" : "takalia",
            "contactName" : "tekalia wang",
            "companyId" : "CMP20190403183037544",
            "companyName" : "sirp",
            "email" : "yanbin.wang@sirp.ca",
            "jobTitle" : "dev",
            "notes" : null,
            "address" : null,
            "repeatTime" : "19:00",
            "repeatDay" : "WED",
            "repeatWeekInterval": "1",
            "recurMin" : null,
            "recurHour" : null,
            "recurDate" : null,
            "recurMonth" : null,
            "recurDay" : null,
            "recurTimezone" : "EST",
            "cronEnable" : "1",
            "supplierCountry" : null
          } , {
            "contactOwner": "a,b,c,d",
            "supplierId" : "1aa67686566011e9b3a416e67761ea5e",
            "creationBuyerId" : "BYR20190403182045390",
            "supplierName" : "takalia",
            "contactName" : "tekalia wang",
            "companyId" : "CMP20190403183037544",
            "companyName" : "sirp",
            "email" : "yanbin.wang@sirp.ca",
            "jobTitle" : "dev",
            "notes" : null,
            "address" : null,
            "repeatTime" : "19:00",
            "repeatDay" : "WED",
            "repeatWeekInterval": "1",
            "recurMin" : null,
            "recurHour" : null,
            "recurDate" : null,
            "recurMonth" : null,
            "recurDay" : null,
            "recurTimezone" : "EST",
            "cronEnable" : "1",
            "supplierCountry" : null
          } , {
            "contactOwner": "a,b,c,d",
            "supplierId" : "1aa67686566011e9b3a416e67761ea5e",
            "creationBuyerId" : "BYR20190403182045390",
            "supplierName" : "takalia",
            "contactName" : "tekalia wang",
            "companyId" : "CMP20190403183037544",
            "companyName" : "sirp",
            "email" : "yanbin.wang@sirp.ca",
            "jobTitle" : "dev",
            "notes" : null,
            "address" : null,
            "repeatTime" : "19:00",
            "repeatDay" : "WED",
            "repeatWeekInterval": "1",
            "recurMin" : null,
            "recurHour" : null,
            "recurDate" : null,
            "recurMonth" : null,
            "recurDay" : null,
            "recurTimezone" : "EST",
            "cronEnable" : "1",
            "supplierCountry" : null
          }  ]
      }
      
    await next()
})

module.exports = supplier