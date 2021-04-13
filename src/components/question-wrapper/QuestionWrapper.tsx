import React, { FC, memo, useCallback, useState } from "react";
import s from "./index.module.scss";
import { QuestionHeader } from "./components/question-header";
import { Answers } from "./components/answers";
import { Button } from "../button";
import { IQuestions } from '../../redux/index';
import { Spinner } from "../spinner";

interface IProps {
  currentQuestion: number;
  questions: Array<IQuestions>;
  isDataLoading: boolean;
  setCurrentQuestion: (number: number) => void;
}

const QuestionWrapper: FC<IProps> = ({
  currentQuestion,
  questions,
  isDataLoading,
  setCurrentQuestion,
}) => {

  const [chosenAnswer, setAnswer] = useState({
    id: 0,
    text: null,
  });

  const chooseAnswer = useCallback((item) => {
    setAnswer(item);
  }, []);

  const answerQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setAnswer({
      id: 0,
      text: null,
    });
  }

  const currAnswers = questions[currentQuestion]?.answers;
  const currQuestionText = questions[currentQuestion]?.questionText;

  return (
    <>
      { isDataLoading
        ?
        <Spinner />
        :
        <div className={s.questionField}>
          <QuestionHeader header={currQuestionText} />
          <Answers
            answers={currAnswers}
            chosenAnswer={chosenAnswer}
            chooseAnswer={chooseAnswer}
          />
          <div className={s.questionFieldButton}>
            <Button
              text='Ответить'
              disabled={chosenAnswer.id === null}
              onClick={answerQuestion}
            />
          </div>
        </div>
      }
    </>
  );
};
export default memo(QuestionWrapper);

