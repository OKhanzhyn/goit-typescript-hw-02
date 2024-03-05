
import css from './App.module.css';
import Feedback from '../Feedback/Feedback'
import Description from "../Description/Description";
import Options from '../Options/Options';
import { useState } from 'react';

const feedbackType = {
	good: 0,
	neutral: 0,
	bad: 0
}


const App = () => {
  const [counter, setCounter] = useState(0);
  
  const updateFeedback = feedbackType => {
    
    // setCounter((prevState) => prevState + 1);
    setCounter(counter + 1); 
    
  };
  return (
    <div className={css.pageStyle}>
      <Description/>
      <Options
      // good={updateFeedback}
      // neutral={updateFeedback}
      // bad={updateFeedback}
      />
      <Feedback
      good={feedbackType.good}
      neutral={feedbackType.neutral}
      bad={feedbackType.bad}
      />
      
    </div>
  );
};

export default App

/* <Feedback
      Good={feedbackList.good}
      Neutral={feedbackList.neutral}
      Bad={feedbackList.bad}
      /> */
