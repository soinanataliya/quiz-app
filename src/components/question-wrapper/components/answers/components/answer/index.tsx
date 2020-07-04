import React, { memo } from "react";
import s from "./index.module.scss";

type PropsType = {
  data: AnswerType;
};

type AnswerType = {
  id: number;
  text: string;
};

export const Answer = memo(({ data }: PropsType) => {
  return <div className={s.answer}>{data.text}</div>;
});
