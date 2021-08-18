import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { GlobalContext } from '../store';
import { useHistory } from 'react-router-dom';
import Loader from '../components/Loader';

import QuestionComponent from '../components/QuestionComponent';

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const { activeQuestion, setActiveQuestion, name } = useContext(GlobalContext);
  let history = useHistory();

  const getQuestions = async () => {
    try {
      setLoading(true);

      const res = await axios.get('/api/questions');
      const questions = res.data;
      setQuestions(questions);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBtnClick = () => {
    let currentStep = activeQuestion;
    if (currentStep < 4) {
      setActiveQuestion(currentStep + 1);
    } else {
      history.push('/result');
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);
  return (
    <div className='questions-page'>
      {loading ? (
        <div className='loader'>
          <Loader />
        </div>
      ) : (
        <>
          <div className='toptext '>{`Hello ${name} there are 5 questions, you can only choose one answer`}</div>

          <div className='question'>
            <QuestionComponent
              question={questions[activeQuestion]}
              activeQuestion={+activeQuestion}
            />
          </div>
          <div className='btn-wrapper'>
            <Button
              variant='contained'
              onClick={handleBtnClick}
              color='primary'
            >
              next
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Questions;
