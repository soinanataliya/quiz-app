import React, { FC, useEffect } from 'react';
import s from './index.module.scss';
import { QuestionWrapper } from '../question-wrapper';
import { IQuestions, IRootReducer, setCurrentQuestionAction, setAnswersAction, IAnswers, ResultType } from '../../redux';
import { connect } from 'react-redux';
import { getQuestions } from '../../redux/helpers';

interface MapStateToProps {
  currentQuestion: number;
  questions: Array<IQuestions>;
  isDataLoading: boolean;
  answers: IAnswers;
  result: ResultType;
  setCurrentQuestion: (number: number) => void;
  setAnswer: (answer: { [key in number]?: number }) => void;
}

const Page: FC<MapStateToProps> = ({
  currentQuestion,
  questions,
  isDataLoading,
  answers,
  result,
  setCurrentQuestion,
  setAnswer,
}) => {


  useEffect(() => {
    getQuestions();
  }, []);

  
    return (
      <div className={s.page}>
        <QuestionWrapper
          currentQuestion={currentQuestion}
          questions={questions}
          isDataLoading={isDataLoading}
          answers={answers}
          result={result}
          setCurrentQuestion={setCurrentQuestion}
          setAnswer={setAnswer}
        />
      </div>
    );
  };

const mapDispatchToProps = {
  setCurrentQuestion: setCurrentQuestionAction,
  setAnswer: setAnswersAction,
};
  
const mapStateToProps = (state: IRootReducer) => {
  return ({
    questions: state.questions || [],
    currentQuestion: state.currentQuestion || 0,
    isDataLoading: state.isDataLoading || false,
    answers: state.answers,
    result: state.result,
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
