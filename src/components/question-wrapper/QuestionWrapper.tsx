import React, { FC, useCallback, useState } from "react";
import s from "./index.module.scss";
import { QuestionHeader } from "./components/question-header";
import { Answers } from "./components/answers";
import { Button } from "./components/button";
import { connect } from "react-redux";
import { IRootReducer, setCurrentQuestionAction, IQuestions } from '../../redux/index';

interface IProps {
  currentQuestion: number,
  questions: Array<IQuestions>,
  setCurrentQuestion: (number: number) => void;
}

const QuestionWrapper: FC<IProps> = ({ currentQuestion, questions, setCurrentQuestion }) => {

  const [chosenAnswer, setAnswer] = useState({
    id: 0,
    text: null,
  });

  const chooseAnswer = useCallback((item) => {
    setAnswer(item);
  }, []);

  const answerQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  }

  const currAnswers = questions[currentQuestion]?.answers;
  const currQuestionText = questions[currentQuestion]?.questionText;

  return (
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
  );
};

const mapDispatchToProps = {
  setCurrentQuestion: setCurrentQuestionAction,
};

const mapStateToProps = (state: IRootReducer) => {
  return ({
  questions: state.questions || [],
  currentQuestion: state.currentQuestion || 0,
})};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionWrapper);

