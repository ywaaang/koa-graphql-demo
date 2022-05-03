const Router = require('koa-router')
const config = new Router()


config.get('/getColumnOrder', async (ctx, next) => {
    ctx.response.status = 200
    ctx.response.body = {
        state: '0000',
        data: {
            "columnOrder" : [ "PART NUMBER", "SUPPLIER CODE", "SERIAL NUMBER", "LINE NUMBER", "PO NUMBER" ],
            "columnActivation" : [ "PART NUMBER", "SUPPLIER CODE", "SERIAL NUMBER", "LINE NUMBER", "PO NUMBER" ],
            "columnStr" : [ "PART NUMBER", "SUPPLIER CODE", "SERIAL NUMBER", "LINE NUMBER", "PO NUMBER" ],
            "colWidth" : null
        }

    }
    await next()
})

config.get('/getUIDColumns', async (ctx, next) => {
    ctx.response.status = 200
    ctx.response.body = {
        "msg" : "Success!",
        "state" : "0000",
        "data" : {
          "lv1UIDColumns" : null,
          "lv2UIDColumns" : null,
          "lv3UIDColumns" : null,
          "lv1UIDColumnsV2" : {
            "1" : {
              "isMapped" : "2",
              "from" : "PO",
              "to" : "poDocNum"
            },
            "1" : {
              "isMapped" : "2",
              "from" : "P/N",
              "to" : "partNum"
            },
            "1" : {
              "isMapped" : "2",
              "from" : "S/N",
              "to" : "sn"
            }
          },
          "lv2UIDColumnsV2" : {
            "7" : {
              "isMapped" : "3",
              "from" : "SUPPLIER CODE",
              "to" : "supplierName"
            }
          },
          "lv3UIDColumnsV2" : {
            "2" : {
              "isMapped" : "3",
              "from" : "PART NUMBER",
              "to" : "partNum"
            }
          }
        }
      
    }
    await next()
})

config.get('/getSupplierUpdateColumns', async (ctx, next) => {
    ctx.response.status = 200
    ctx.response.body = {
        state: '0000',
        "supplierUpdateColV2" : {
            "26" : {
            "isMapped" : "3",
            "from" : "STATUS",
            "to" : "STATUS"
            }
        },
        "supplierVisibleReportColV2" : {
            "1" : {
            "isMapped" : "2",
            "from" : "PO NUMBER",
            "to" : "Numéro"
            },
            "7" : {
            "isMapped" : "3",
            "from" : "SUPPLIER CODE",
            "to" : "SUPPLIER CODE"
            }
        }


    }
    await next()
})

config.get('/getSetupGuide', async (ctx, next) => {
    ctx.response.status = 200
    ctx.response.body = {
        "msg" : "Success!",
        "state" : "0000",
        "data" : {
         "isAllSet" : "1",
         "isUidSet" : "1",
         "isUploadColSet" : "1",
         "isUpdateColSet" : "1",
         "isTeamSet" : "1"
        }
    }
        
    await next()
})


module.exports = config