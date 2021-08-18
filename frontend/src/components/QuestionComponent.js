import React, { useContext } from 'react';
import QuestionOption from './QuestionOption';
import { GlobalContext } from '../store';

const QuestionComponent = (props) => {
  const { activeQuestion } = useContext(GlobalContext);
  const { QuestionText, Correct, QuestionOptions } = props.question;
  return (
    <div className='question-wrap'>
      <div className='question-title'>
        {' '}
        {`${activeQuestion + 1}-  ${QuestionText}`}
      </div>
      <div className='question-options'>
        {QuestionOptions.map((option) => {
          return (
            <QuestionOption
              option={option}
              correct={Correct}
              key={option._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default QuestionComponent;
