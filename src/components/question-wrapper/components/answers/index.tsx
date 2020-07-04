import React, { memo } from 'react';
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

export const Answers = memo(
 () => {
    return (
      <div className={s.answers}>
       { MOCK_DATA.map(item => <Answer data={item} />)}
      </div>
    );
  },
);
