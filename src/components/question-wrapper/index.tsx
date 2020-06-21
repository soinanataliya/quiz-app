import React, { memo } from "react";
import s from "./index.module.scss";
import { QuestionHeader } from "./components/question-header";
import { Answers } from "./components/answers";

export const QuestionField = memo(() => {
  return (
    <div className={s.questionField}>
      <QuestionHeader />
      <Answers />
    </div>
  );
});
