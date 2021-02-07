import React, { memo } from "react";
import s from "./index.module.scss";
import { QuestionHeader } from "./components/question-header";
import { Answers } from "./components/answers";
import { Button } from "./components/button";

const QuestionWrapper = memo(() => {
  return (
    <div className={s.questionField}>
      <QuestionHeader header="Быть или не быть" />
      <Answers />
      <div className={s.questionFieldButton}>
        <Button text='Ответить' />
      </div>
    </div>
  );
});

export default memo(QuestionWrapper);

