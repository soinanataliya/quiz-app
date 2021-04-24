import React, { FC, memo, useCallback, useState } from "react";
import s from "./index.module.scss";
import { QuestionHeader } from "./components/question-header";
import { Answers } from "./components/answers";
import { Button } from "../button";
import { IAnswer, IQuestions, setAnswersAction } from '../../redux/index';
import { Spinner } from "../spinner";

const DEFAULT_VALUES = {
  id: null,
  text: null,
};

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

  const [chosenAnswer, setAnswer] = useState<IAnswer>(DEFAULT_VALUES);

  const [isTestFinished, setIsTestFinished] = useState(false);

  const chooseAnswer = useCallback((item) => {
    setAnswer(item);
  }, []);

  const answerQuestion = () => {
    if (questions.length === currentQuestion + 1) {
      setIsTestFinished(true)
    }
    setCurrentQuestion(currentQuestion + 1);
    setAnswer(DEFAULT_VALUES);
    setAnswersAction({1: 1});
  }

  const currAnswers = questions[currentQuestion]?.answers;
  const currQuestionText = questions[currentQuestion]?.questionText;

  return (
    <>
      {isDataLoading && <Spinner />}
      <div className={s.questionField}>
        {!isDataLoading && !isTestFinished &&
          <>
            <QuestionHeader header={currQuestionText} />
            <Answers
              answers={currAnswers}
              chosenAnswer={chosenAnswer}
              chooseAnswer={chooseAnswer} />
            <div className={s.questionFieldButton}>
              <Button
                text='Ответить'
                disabled={chosenAnswer.id === null}
                onClick={answerQuestion} />
            </div></>
        }        {
          !isDataLoading && isTestFinished &&
          <>
            Тест завершен
          </>
        }
      </div>
    </>
  );
};
export default memo(QuestionWrapper);

