module.exports = function routerResponse(option={}){
    return async function(ctx, next){
        ctx.success = function (data, msg, code) {
            ctx.type = option.type || 'json'
            ctx.body = {
                code : code || 200,
                msg : msg || 'success',
                data : data
            }
        }

        ctx.fail = function (msg, code) {
            ctx.type = option.type || 'json'
            ctx.body = {
                code : code || option.failCode || 999,
                msg : msg || option.successMsg || 'fail',
            }
            ctx.app.emit('error', msg)
        }

       await next()
    }

}