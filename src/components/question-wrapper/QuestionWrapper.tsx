import React, { FC, memo, useCallback, useState } from "react";
import s from "./index.module.scss";
import { QuestionHeader } from "./components/question-header";
import { Answers } from "./components/answers";
import { Button } from "../button";
import { IAnswer, IAnswers, IQuestions } from '../../redux/index';
import { Spinner } from "../spinner";
import { getToNextQuestion, sendAnswers } from "../../redux/helpers";

interface IProps {
  currentQuestion: number;
  questions: Array<IQuestions>;
  isDataLoading: boolean;
  answers: IAnswers;
  setCurrentQuestion: (number: number) => void;
  setAnswer: (answer: IAnswers) => void;
}

const QuestionWrapper: FC<IProps> = ({
  currentQuestion,
  questions,
  isDataLoading,
  answers,
  setAnswer: setAnswerAction,
}) => {

  const [chosenAnswer, setAnswer] = useState<IAnswer>({});

  const [isTestFinished, setIsTestFinished] = useState(false);

  const chooseAnswer = useCallback((item) => {
    setAnswer(item);
  }, []);

  const answerQuestion = async () => {
    if (!chosenAnswer.id) return

    getToNextQuestion(
      {[questions[currentQuestion].id]: chosenAnswer.id},
      currentQuestion
    );

    if (questions.length === currentQuestion + 1) {
      setIsTestFinished(true);
      const updatedAnswers = {...answers, [questions[currentQuestion].id]: chosenAnswer.id }
      sendAnswers(updatedAnswers);
    }

    setAnswer({});
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
                disabled={!chosenAnswer.id}
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

