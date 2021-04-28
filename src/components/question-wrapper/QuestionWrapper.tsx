import React, { FC, memo, useCallback, useState } from "react";
import s from "./index.module.scss";
import { QuestionHeader } from "./components/question-header";
import { Answers } from "./components/answers";
import { Button } from "../button";
import { IAnswer, IQuestions } from '../../redux/index';
import { Spinner } from "../spinner";
import { getToNextQuestion, sendAnswers } from "../../redux/helpers";

const DEFAULT_VALUES = {
  id: null,
  text: null,
};

interface IProps {
  currentQuestion: number;
  questions: Array<IQuestions>;
  isDataLoading: boolean;
  setCurrentQuestion: (number: number) => void;
  setAnswer: (answer: { [key: number]: number | null }) => void;
}

const QuestionWrapper: FC<IProps> = ({
  currentQuestion,
  questions,
  isDataLoading,
  setCurrentQuestion,
  setAnswer: setAnswerAction,
}) => {

  const [chosenAnswer, setAnswer] = useState<IAnswer>(DEFAULT_VALUES);

  const [isTestFinished, setIsTestFinished] = useState(false);

  const chooseAnswer = useCallback((item) => {
    setAnswer(item);
  }, []);

  const answerQuestion = async () => {
    if (questions.length === currentQuestion + 1) {
      setIsTestFinished(true)
      sendAnswers();
    }
    getToNextQuestion({ [questions[currentQuestion].id]: chosenAnswer.id },
      currentQuestion);
    setAnswer(DEFAULT_VALUES);

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

