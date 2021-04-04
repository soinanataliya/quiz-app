import React, { FC, useEffect } from 'react';
import s from './index.module.scss';
import { QuestionWrapper } from '../question-wrapper';
import { IQuestions, IRootReducer, setCurrentQuestionAction } from '../../redux';
import { connect } from 'react-redux';
import { getQuestions } from '../../redux/helpers';

interface MapStateToProps {
  currentQuestion: number;
  questions: Array<IQuestions>;
  isDataLoading: boolean;
  setCurrentQuestion: (number: number) => void;
}

const Page: FC<MapStateToProps> = ({
  currentQuestion,
  questions,
  isDataLoading,
  setCurrentQuestion,
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
        />
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
    isDataLoading: state.isDataLoading || false,
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
