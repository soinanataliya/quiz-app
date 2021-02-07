import React, { FC, memo } from 'react';
import s from './index.module.scss';

interface IProps {
  header: string;
}

const QuestionHeader: FC<IProps> = ({ header }) => {
  return (
    <div className={s.questionHeader}>
      {header}
    </div>
  );
};

export default memo(QuestionHeader);

