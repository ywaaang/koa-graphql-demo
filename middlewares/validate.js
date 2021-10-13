/**
 * @description validation middleware
 */

const genValidateParams = (method, schema, options={}) => {
    async function validateParams (ctx, next) {
        let data
        if (method === 'get') {
            data = ctx.request.query
        } else {
            data = ctx.request.body
        }
        const { error } = schema.validate(data, options)
        if (error) {
            ctx.fail(error.message)
            return
        }
        await next()
    }
    return validateParams
}
 
module.exports = genValidateParams