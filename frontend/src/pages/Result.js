import React, { useContext } from 'react';
import { GlobalContext } from '../store';
import { Link } from 'react-router-dom';

const Result = () => {
  const { result, setResult, setName, setActiveQuestion } =
    useContext(GlobalContext);

  const resetState = () => {
    setName('');
    setResult(0);
    setActiveQuestion(0);
  };

  return (
    <>
      <div className='result'>Your Result {result}</div>;
      <div className='home_link'>
        <Link to='/' onClick={resetState}>
          home
        </Link>
      </div>
    </>
  );
};

export default Result;
