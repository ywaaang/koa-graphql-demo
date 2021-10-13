
const Router = require('koa-router');
const controller = require('../controller/c-index')
const router = new Router();

router.get('/', controller.intro)

module.exports = router;