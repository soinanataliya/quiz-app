import React, { FC, memo } from "react";
import { IAnswer } from '../../../../../../redux/types';
import style from "./index.module.scss";
import classnames from 'classnames';

const cn = classnames.bind(style);

interface IProps {
  key: number;
  data: IAnswer;
  chosen: boolean;
  chooseAnswer: (item: IAnswer) => void;
};


export const Answer: FC<IProps> = ({ data, chosen, chooseAnswer }) => {
  const handleClick = () => {
    chooseAnswer(data)
  }
  return (
    <div
      className={cn(style.answer,
        { [style.chosenAnswer]: chosen }
      )}
      onClick={handleClick}>
      {data.text}
    </div>
  );
};

export default memo(Answer);

