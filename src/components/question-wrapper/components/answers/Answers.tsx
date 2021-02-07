import React, { FC, memo } from 'react';
import { Answer } from './components/answer';
import s from './index.module.scss';

const MOCK_DATA = [
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
];

const Answers: FC =
  () => {
    return (
      <div className={s.answers}>
        {
          MOCK_DATA.map(item => <Answer key={item.id} data={item} />)
        }
      </div>
    );
  };

export default memo(Answers);
