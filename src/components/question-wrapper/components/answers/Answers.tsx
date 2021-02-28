import React, { FC, memo } from 'react';
import { IAnswer } from '../../../../redux';
import { Answer } from './components/answer';
import s from './index.module.scss';

interface IProps {
  answers: Array<IAnswer>;
  chosenAnswer: IAnswer;
  chooseAnswer: (item: IAnswer) => void;
}

const Answers: FC<IProps> =
  ({ answers = [], chosenAnswer, chooseAnswer }) => {

    return (
      <div className={s.answers}>
        {
          answers.map(item =>
            <Answer
              key={item.id}
              data={item}
              chooseAnswer={chooseAnswer}
              chosen={item.id === chosenAnswer.id}
            />
          )
        }
      </div>
    );
  };

export default memo(Answers);
