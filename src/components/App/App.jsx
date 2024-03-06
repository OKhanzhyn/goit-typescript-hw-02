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
  const [counter, setCounter] = useState(feedbackType);
  
  // const updateFeedback = feedbackType => {
    
  //    setCounter((prevState) => prevState + 1);
  //   // setCounter({counter} + 1);     
  // };
  
  const updateFeedbackGood = feedbackType => {
   setCounter({...counter, good: counter.good + 1});     
 };
 const updateFeedbackNeutral = feedbackType => {
  setCounter({...counter, neutral: counter.neutral + 1});     
};
const updateFeedbackBad = feedbackType => {
  setCounter({...counter, bad: counter.bad + 1});     
};
  return (
    <div className={css.pageStyle}>
      <Description/>
      <Options
      good={updateFeedbackGood}
      neutral={updateFeedbackNeutral}
      bad={updateFeedbackBad}
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

 // good={updateFeedback}
      // neutral={updateFeedback}
      // bad={updateFeedback}

/* <Feedback
      Good={feedbackList.good}
      Neutral={feedbackList.neutral}
      Bad={feedbackList.bad}
      /> */
