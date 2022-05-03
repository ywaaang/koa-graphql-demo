const Koa = require('koa');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const ejs = require('ejs');
const views = require('koa-views');
const staticCache = require('koa-static-cache');
const { logger } = require('./middlewares/log');
const responseHanlder = require('./middlewares/response');
const app = new Koa();
// const { typeDefs, resolvers } = require('./graphql/schema')
// const { upperDirectiveTransformer, authDirectiveTransformer } = require('./graphql/directive')
// const { makeExecutableSchema } = require('@graphql-tools/schema');
// const { ApolloServer } = require('apollo-server-koa')
// const { ApolloServerPluginLandingPageGraphQLPlayground, ApolloServerPluginCacheControl } = require('apollo-server-core');
const config = require('./config/default.js');

app.use(require('./utils/jwt'));
// async function startApollo() {
//   // Create the base executable schema
//   const schema = makeExecutableSchema({
//     typeDefs,
//     resolvers
//   });
//   // init apollo server
//   const apollo = new ApolloServer({ 
//     plugins: [
//       ApolloServerPluginLandingPageGraphQLPlayground(),
//       ApolloServerPluginCacheControl({
//         defaultMaxAge: 60000,
//         // Don't send the `cache-control` response header.
//         calculateHttpHeaders: false,
//       }),
//     ],
//     // mocks: true,
//     context: ({ ctx }) => ({
//       session: ctx.session,
//     }),
//     schema: authDirectiveTransformer(upperDirectiveTransformer(schema, 'upper'), 'auth'),
//   })
//   await apollo.start();
//   apollo.applyMiddleware({ app, path: '/gql' });
// }
// startApollo();

// cache middleware
app.use(staticCache(path.join(__dirname, './public'), { dynamic: true }, {
  maxAge: 365 * 24 * 60 * 60
}))
app.use(staticCache(path.join(__dirname, './images'), { dynamic: true }, {
  maxAge: 365 * 24 * 60 * 60
}))

// response middleware
app.use(responseHanlder());

// logger middleware
app.use(async (ctx, next) => {
  await next();
  logger.debug('![node log]')
  logger.debug(ctx.request.method, ctx.request.path, ctx.request.headers, ctx.request.body, ctx.response.status, ctx.response.body);
})

app.on("error", (err, ctx) => {
  logger.error(err)
})

// ejs template engine
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))
app.use(bodyParser({
  formLimit: '1mb'
}))

// 路由模块使用前需要先安装和实例化
const Router = require('koa-router')
const router = new Router()
const fs = require('fs')

app.use(async (ctx, next)=> {
  ctx.set('Access-Control-Allow-Origin', 'https://api.dev.midori.earth');
  ctx.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  ctx.set('Access-Control-Allow-Credentials', true);
  ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Origin');
  await next();
});

// 其他页面通过 router 加载
let urls = fs.readdirSync(__dirname + '/urls')
urls.forEach((element) => {
    let module = require(__dirname + '/urls/' + element)
    /*
      urls 下面的每个文件负责一个特定的功能，分开管理
      通过 fs.readdirSync 读取 urls 目录下的所有文件名，挂载到 router 上面
    */
    router.use('/' + element.replace('.js', ''), module.routes(), module.allowedMethods())
})
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(config.port)

console.log(`listening on port ${config.port}`)
