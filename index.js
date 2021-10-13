const Koa = require('koa');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const ejs = require('ejs');
const session = require('koa-session-minimal');
const views = require('koa-views');
const staticCache = require('koa-static-cache');
const { logger } = require('./middlewares/log');
const responseHanlder = require('./middlewares/response');
const app = new Koa();
const { typeDefs, resolvers } = require('./graphql/schema')
const { upperDirectiveTransformer, authDirectiveTransformer } = require('./graphql/directive')
const schedule = require('./utils/schedule');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { ApolloServer } = require('apollo-server-koa')
const { ApolloServerPluginLandingPageGraphQLPlayground, ApolloServerPluginCacheControl } = require('apollo-server-core');
const jwt = require('jsonwebtoken')

const TOKEN_SECRET = 'some-token-secret';
const config = require('./config/default.js');
// session store config
const sessionMysqlConfig= {
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  host: config.database.HOST,
}

// session middleware
// const MysqlStore = require('koa-mysql-session');
// app.use(session({
//   key: 'USER_SID',
//   store: new MysqlStore(sessionMysqlConfig),
//   cookie: {
//     path: '/',              // cookie path
//     maxAge: 1000 * 60 * 60 * 24 * 30,      // cookie max age
//     httpOnly: false,         // if set http only flag
//     overwrite: false,        // if set overwrite flag
//     domain: process.env.DOMAIN,
// }
// }))

app.use(require('./utils/jwt'));
async function startApollo() {
  // Create the base executable schema
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers
  });
  // init apollo server
  const apollo = new ApolloServer({ 
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground({
        settings: {
          // include cookies in the requests from the GraphQL playground
        },
      }),
      ApolloServerPluginCacheControl({
        defaultMaxAge: 60000,
        // Don't send the `cache-control` response header.
        calculateHttpHeaders: false,
      }),
    ],
    // mocks: true,
    // context: ({ ctx }) => {
      // if (ctx.session.session_id) {
      //     return {session_id: ctx.session.session_id}
      // } else {
      //     ctx.fail("not logged in", 400)
      //     throw new AuthenticationError('you must be logged in');
      // }
    // },
    context: ({ ctx }) => ({
      session: ctx.session,
    }),
    schema: authDirectiveTransformer(upperDirectiveTransformer(schema, 'upper'), 'auth'),
  })
  await apollo.start();
  apollo.applyMiddleware({ app, path: '/gql' });
}
startApollo();

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
  logger.debug('!---------------------------[node log]-----------------------------')
  logger.debug(ctx.request.method, ctx.request.path, ctx.request.headers, ctx.request.body, ctx.response.status, ctx.response.body);
  logger.debug('---------------------------[node log]-----------------------------!')
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

// router
const routers = require('./routers/index')
app.use(routers.routes())
app.use(routers.allowedMethods())

app.listen(config.port)

console.log(`listening on port ${config.port}`)
