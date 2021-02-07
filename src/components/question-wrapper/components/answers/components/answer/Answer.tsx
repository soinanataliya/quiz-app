import React, { FC, memo } from "react";
import { IAnswer } from '../../../../../../redux/types';
import s from "./index.module.scss";

interface IProps {
  data: IAnswer;
};


export const Answer: FC<IProps> = ({ data }) => {
  return <div className={s.answer}>{data.text}</div>;
};

export default memo(Answer);

