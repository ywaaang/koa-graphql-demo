const Router = require('koa-router')
const user = new Router()

user.post('/totalForecastNoSpendBySupplier', async (ctx, next) => {
  ctx.response.status = 200
  ctx.response.body = {
      "msg" : "Success!",
      "state" : "0000",
      "data" : [ {
        "supplierName" : "DEBURE",
        "supplierId" : "962d71d56955dd1ecff2004da9ca2d29",
        "totalSpend" : "1275",
        "noOfPO" : "1",
        "noOfPN" : "1",
        "noOfLines" : "1",
        "spend" : "1275",
      }, {
        "supplierName" : "METCOR",
        "supplierId" : "d1d11a59db1bca565d30d0d32ffe0be4",
        "totalSpend" : "5978",
        "noOfPO" : "1",
        "noOfPN" : "1",
        "noOfLines" : "1",
        "spend" : "1275",
      }, {
        "supplierName" : "HERCUL",
        "supplierId" : "ec54fbbd042e5097620d0a7210ff8f09",
        "totalSpend" : "20516",
        "noOfPO" : "1",
        "noOfPN" : "1",
        "noOfLines" : "2",
        "spend" : "1275",
      } ]      
  }
  await next()
})
user.post('/totalPastNoSpendBySupplier', async (ctx, next) => {
    ctx.response.status = 200
    ctx.response.body = {
        "msg" : "Success!",
        "state" : "0000",
        "data" : [ {
          "supplierName" : "DEBURE",
          "supplierId" : "962d71d56955dd1ecff2004da9ca2d29",
          "totalSpend" : "1275.00",
          "po" : "1",
          "part" : "1",
          "line" : "1",
          "spend" : 300,
        }, {
          "supplierName" : "METCOR",
          "supplierId" : "d1d11a59db1bca565d30d0d32ffe0be4",
          "totalSpend" : "5978.00",
          "po" : "1",
          "part" : "1",
          "line" : "1",
          "spend" : 1000,
        }, {
          "supplierName" : "HERCUL",
          "supplierId" : "ec54fbbd042e5097620d0a7210ff8f09",
          "totalSpend" : "20516.00",
          "po" : "1",
          "part" : "1",
          "line" : "2",
          "spend" : 1300,
        }, {
          "supplierName" : "XYZ",
          "supplierId" : "d1d11a59db1bca565d30d0d32ffe0be4",
          "totalSpend" : "5978.00",
          "po" : "1",
          "part" : "1",
          "line" : "1",
          "spend" : 2000,
        }, {
          "supplierName" : "SIRP",
          "supplierId" : "ec54fbbd042e5097620d0a7210ff8f09",
          "totalSpend" : "20516.00",
          "po" : "1",
          "part" : "1",
          "line" : "2",
          "spend" : 3300,
        }  ]      
    }
    await next()
})


user.post('/totalForecastNoSpendByMonth', async (ctx, next) => {
  ctx.response.status = 200
  ctx.response.body = {
      "msg" : "Success!",
      "state" : "0000",
      "data" : [{
          "totalSpend" : "1275.00",
          "month" : "02 2017",
          "noOfPO" : "1",
          "noOfPN" : "1",
          "noOfLines" : "1"
        }, {
          "totalSpend" : "13380.00",
          "month" : "01 2018",
          "noOfPO" : "1",
          "noOfPN" : "1",
          "noOfLines" : "1"
        }, {
          "totalSpend" : "7136.00",
          "month" : "05 2019",
          "noOfPO" : "1",
          "noOfPN" : "1",
          "noOfLines" : "1"
        }, {
          "totalSpend" : "5978.00",
          "month" : "01 2020",
          "noOfPO" : "1",
          "noOfPN" : "1",
          "noOfLines" : "1"
        }
      ]      
  }
  await next()
})
user.post('/totalPastNoSpendByMonth', async (ctx, next) => {
    ctx.response.status = 200
    ctx.response.body = {
        "msg" : "Success!",
        "state" : "0000",
        "data" : [{
            "totalSpend" : "1275.00",
            "month" : "02 2017",
            "noOfPO" : "1",
            "noOfPN" : "1",
            "noOfLines" : "1"
          }, {
            "totalSpend" : "13380.00",
            "month" : "01 2018",
            "noOfPO" : "1",
            "noOfPN" : "1",
            "noOfLines" : "1"
          }, {
            "totalSpend" : "7136.00",
            "month" : "05 2019",
            "noOfPO" : "1",
            "noOfPN" : "1",
            "noOfLines" : "1"
          }, {
            "totalSpend" : "5978.00",
            "month" : "01 2020",
            "noOfPO" : "1",
            "noOfPN" : "1",
            "noOfLines" : "1"
          }
        ]      
    }
    await next()
})

user.post('/noOfSupplierUpdatesByMonth', async (ctx, next) => {
    ctx.response.status = 200
    ctx.response.body = {
        "msg" : "Success!",
        "state" : "0000",
        "data" : [ {
            "totalSpend" : "1275.00",
            "month" : "02 2017",
            "noOfResponse" : "4",
            "noOfRequest" : "1",
          }, {
            "totalSpend" : "13380.00",
            "month" : "01 2018",
            "noOfResponse" : "4",
            "noOfRequest" : "1",
          }, {
            "totalSpend" : "7136.00",
            "month" : "05 2019",
            "noOfResponse" : "4",
            "noOfRequest" : "1",
          }, {
            "totalSpend" : "5978.00",
            "month" : "01 2020",
            "noOfResponse" : "4",
            "noOfRequest" : "1",
          }
        
        ]      
    }
    await next()
})


user.post('/noOfSupplierUpdatesBySupplier', async (ctx, next) => {
    ctx.response.status = 200
    ctx.response.body = {
        "msg" : "Success!",
        "state" : "0000",
        "data" : [ {
            "supplierName" : "DEBURE",
            "supplierId" : "962d71d56955dd1ecff2004da9ca2d29",
            "totalSpend" : "1275.00",
            "noOfResponse" : "1",
            "noOfRequest" : "1",
            "noOfUpdates" : "1"
          }, {
            "supplierName" : "METCOR",
            "supplierId" : "d1d11a59db1bca565d30d0d32ffe0be4",
            "totalSpend" : "5978.00",
            "noOfResponse" : "4",
            "noOfRequest" : "1",
            "noOfLines" : "1"
          }, {
            "supplierName" : "HERCUL",
            "supplierId" : "ec54fbbd042e5097620d0a7210ff8f09",
            "totalSpend" : "20516.00",
            "noOfResponse" : "2",
            "noOfRequest" : "2",
            "noOfLines" : "2"
          } , {
            "supplierName" : "XYZ",
            "supplierId" : "d1d11a59db1bca565d30d0d32ffe0be4",
            "totalSpend" : "5978.00",
            "noOfResponse" : "0",
            "noOfRequest" : "1",
            "noOfLines" : "1"
          }, {
            "supplierName" : "SIRP",
            "supplierId" : "ec54fbbd042e5097620d0a7210ff8f09",
            "totalSpend" : "20516.00",
            "noOfResponse" : "5",
            "noOfRequest" : "4",
            "noOfLines" : "2"
          } 
        ]      
    }
    await next()
})

user.post('/avgResponseTimeByMonth', async (ctx, next) => {
    ctx.response.status = 200
    ctx.response.body = {
        "msg" : "Success!",
        "state" : "0000",
        "data" : [{
            "totalSumDifference" : "0",
            "totalParts" : "0",
            "avg_partsPerhour" : "1",
            "month" : "06 2019"
          }, {
            "totalSumDifference" : "0",
            "totalParts" : "0",
            "avg_partsPerhour" : "0.5",
            "month" : "07 2019"
          }, {
            "totalSumDifference" : "0",
            "totalParts" : "0",
            "avg_partsPerhour" : "2",
            "month" : "08 2019"
          }, {
            "totalSumDifference" : "0",
            "totalParts" : "0",
            "avg_partsPerhour" : "5",
            "month" : "09 2019"
          }, {
            "totalSumDifference" : "0",
            "totalParts" : "0",
            "avg_partsPerhour" : "8",
            "month" : "10 2019"
          }, {
            "totalSumDifference" : "1.0678",
            "totalParts" : "1",
            "avg_partsPerhour" : "1.06780000",
            "month" : "11 2019"
          }, {
            "totalSumDifference" : "0.2943",
            "totalParts" : "3",
            "avg_partsPerhour" : "0.09810000",
            "month" : "12 2019"
          } 
        
        ]      
    }
    await next()
})


user.post('/avgResponseTimeBySupplier', async (ctx, next) => {
    ctx.response.status = 200
    ctx.response.body = {
        "msg" : "Success!",
        "state" : "0000",
        "data" : [ {
            "totalSumDifference" : "1.4112",
            "totalParts" : "14",
            "avg_partsPerhour" : "0.10080000",
            "supplierId" : "6616df16f716e8f33e7522a361832c7d",
            "supplierName" : "A.W"
          }, {
            "totalSumDifference" : "1.8592",
            "totalParts" : "32",
            "avg_partsPerhour" : "0.05810000",
            "supplierId" : "0ff526d19466b716bef3eac0c4669480",
            "supplierName" : "MY"
          }, {
            "totalSumDifference" : "1.4112",
            "totalParts" : "14",
            "avg_partsPerhour" : "0.10080000",
            "supplierId" : "6616df16f716e8f33e7522a361832c7d",
            "supplierName" : "A.W"
          }, {
            "totalSumDifference" : "1.8592",
            "totalParts" : "32",
            "avg_partsPerhour" : "0.05810000",
            "supplierId" : "0ff526d19466b716bef3eac0c4669480",
            "supplierName" : "MY"
          }, {
            "totalSumDifference" : "1.4112",
            "totalParts" : "14",
            "avg_partsPerhour" : "0.10080000",
            "supplierId" : "6616df16f716e8f33e7522a361832c7d",
            "supplierName" : "A.W"
          }
        ]      
    }
    await next()
})

user.post('/currentCoverage', async (ctx, next) => {
    ctx.response.status = 200
    ctx.response.body = {
        "msg" : "Success!",
        "state" : "0000",
        "data" : [ {
            "supplierName" : "A.W",
            "supplierID" : "6616df16f716e8f33e7522a361832c7d",
            "newTotalNoLineItem" : "9",
            "newHighLightFlag1" : "9",
            "activeTotalNoLineItem" : "13",
            "activeHighLightFlag1" : "0",
            "changeTotalNoLineItem" : "1",
            "changeHighLightFlag1" : "1"
          }, {
            "supplierName" : "MY",
            "supplierID" : "0ff526d19466b716bef3eac0c4669480",
            "newTotalNoLineItem" : "11",
            "newHighLightFlag1" : "11",
            "activeTotalNoLineItem" : "7",
            "activeHighLightFlag1" : "0",
            "changeTotalNoLineItem" : "0",
            "changeHighLightFlag1" : "0"
          } 
        
        ]      
    }
    await next()
})

user.post('/onTimeDeliveryByMonth', async (ctx, next) => {
    ctx.response.status = 200
    ctx.response.body = {
        "msg" : "Success!",
        "state" : "0000",
        "data" : [ {
            "noDelayParts" : 19.0,
            "noOntimeParts" : 15.0,
            "rate" : 0.4411764705882353,
            "month" : "11 2019"
          }, {
            "noDelayParts" : 0.0,
            "noOntimeParts" : 8.0,
            "rate" : 100.0,
            "month" : "05 2019"
          }, {
            "noDelayParts" : 0.0,
            "noOntimeParts" : 1.0,
            "rate" : 100.0,
            "month" : "08 2019"
          }, {
            "noDelayParts" : 0.0,
            "noOntimeParts" : 1.0,
            "rate" : 100.0,
            "month" : "10 2019"
          } 
        ]      
    }
    await next()
})

user.post('/onTimeDeliveryBySupplier', async (ctx, next) => {
    ctx.response.status = 200
    ctx.response.body = {
        "msg" : "Success!",
        "state" : "0000",
        "data" : [ {
            "noDelayParts" : 5.0,
            "noOntimeParts" : 23.0,
            "rate" : 0.8214285714285714,
            "supplierName" : "HERCUL",
            "supplierID" : "ec54fbbd042e5097620d0a7210ff8f09"
          }, {
            "noDelayParts" : 14.0,
            "noOntimeParts" : 0.0,
            "rate" : 0.0,
            "supplierName" : "METCOR",
            "supplierID" : "d1d11a59db1bca565d30d0d32ffe0be4"
          }, {
            "noDelayParts" : 0.0,
            "noOntimeParts" : 1.0,
            "rate" : 100.0,
            "supplierName" : "ROMAX",
            "supplierID" : "6f0da84bf9a2f2a3ce4f0aa05f7f5a96"
          }, {
            "noDelayParts" : 0.0,
            "noOntimeParts" : 1.0,
            "rate" : 100.0,
            "supplierName" : "DEBURE",
            "supplierID" : "962d71d56955dd1ecff2004da9ca2d29"
          }
        
        ]      
    }
    await next()
})

module.exports = user