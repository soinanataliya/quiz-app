import React, { FC, useEffect } from 'react';
import s from './index.module.scss';
import { QuestionWrapper } from '../question-wrapper';
import { IQuestions, IRootReducer, setCurrentQuestionAction, setAnswersAction } from '../../redux';
import { connect } from 'react-redux';
import { getQuestions } from '../../redux/helpers';

interface MapStateToProps {
  currentQuestion: number;
  questions: Array<IQuestions>;
  isDataLoading: boolean;
  setCurrentQuestion: (number: number) => void;
  setAnswer: (answer: { [key: number]: number | null }) => void;
}

const Page: FC<MapStateToProps> = ({
  currentQuestion,
  questions,
  isDataLoading,
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
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
