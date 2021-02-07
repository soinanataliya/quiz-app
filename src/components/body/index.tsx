import React, { memo } from 'react';
import s from './index.module.scss';
import { QuestionWrapper } from '../question-wrapper';

export const Body = memo(
 () => {
    return (
      <div className={s.body}>
        <QuestionWrapper />
      </div>
    );
  },
);
