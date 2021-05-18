const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();

const questions = [
  {
    id: 1,
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
    id: 2,
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
  },
  {
    id: 3,
    questionText: 'В каком году был основан Рим?',
    answers:
      [
        {
          id: 1,
          text: '850'
        },
        {
          id: 2,
          text: '753'
        },
        {
          id: 3,
          text: '573'
        },
        {
          id: 4,
          text: '923'
        }
      ]
  }
];

const answers = {1: 1, 2: 2, 3: 2}

router.get('/questions', async (ctx, next) => {
  ctx.body = questions;
  await next();
});

router.post('/questions', async (ctx, next) => {
  const userAnswers = ctx.request.body;

  const result = Object.keys(userAnswers).every((userAnswerId) => {
    return answers[userAnswerId] === userAnswers[userAnswerId]
  });
  ctx.body = {result};
  await next();
});

app.use(router.routes()); // route middleware
module.exports = app;