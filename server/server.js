
const Koa = require('koa');
const router = require('koa-router')();
const mount = require('koa-mount');
const cors = require('@koa/cors');

const app = new Koa();

app.use(cors());
app.use(mount(require('./questions.js')));
app.use(router.routes()); // route middleware
if(require.main === module) {
     app.listen(5000); // default
}