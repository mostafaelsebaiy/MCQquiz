import React, { useState, useContext } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { GlobalContext } from '../store';

const QuestionOption = (props) => {
  const { setResult, result } = useContext(GlobalContext);
  const { Option_Value, Option_Title } = props.option;
  const [answer, setAnswer] = useState(false);

  const handleClick = () => {
    if (answer === false) {
      setAnswer(true);
      if (Option_Title === props.correct) {
        setResult(result + 1);
      }
    } else {
      setAnswer(false);
      if (Option_Title === props.correct) {
        setResult(result - 1);
      }
    }
  };

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={answer}
            onChange={handleClick}
            name='checkedB'
            color='primary'
          />
        }
        label={Option_Value}
      />
    </div>
  );
};

export default QuestionOption;
