import React, { memo } from 'react';
import s from './index.module.scss';

export const QuestionHeader = memo(
 () => {
    return (
      <div className={s.questionHeader}>
       Быть или не быть?
      </div>
    );
  },
);
