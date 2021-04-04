const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();

const questions = [
  {
    questionText: 'Быть или не быть?',
    answers:
      [
        {
          id: 1,
          text: 'Быть'
        },
        {
          id: 2,
          text: 'Не быть'
        },
        {
          id: 3,
          text: 'Вот в чем вопрос'
        }
      ]
  },
  {
    questionText: 'Кто автор строк "Белеет парус одинокий...?',
    answers:
      [
        {
          id: 1,
          text: 'Пушкин'
        },
        {
          id: 2,
          text: 'Лермонтов'
        },
        {
          id: 3,
          text: 'Тургенев'
        },
        {
          id: 4,
          text: 'Некрасов'
        }
      ]
  }
];

router.get('/questions', async (ctx, next) => {
  ctx.body = questions;
  await next();
});
app.use(router.routes()); // route middleware
module.exports = app;