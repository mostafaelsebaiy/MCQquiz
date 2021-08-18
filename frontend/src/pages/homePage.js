import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../store';

const HomePage = () => {
  const { name, setName } = useContext(GlobalContext);
  let history = useHistory();

  const handleBtnClick = () => {
    name && history.push('/questions');
  };
  return (
    <div className='home'>
      <div className='toptext '>{`MCQ Quiz `}</div>
      <div className='wrapper d-flex flex-row'>
        <TextField
          required
          id='standard-required'
          label='enter your name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button variant='contained' onClick={handleBtnClick} color='primary'>
          start quiz
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
