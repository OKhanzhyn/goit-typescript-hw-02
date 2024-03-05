
import css from './App.module.css';
import Feedback from '../Feedback/Feedback'
// import userData from "../../userData.json";
import Description from "../Description/Description";
// import feedbackList from "../../feedbackList.json";
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
    // (feedbackType) // Тут використовуй сеттер, щоб оновити стан
    // setCounter((prevState) => prevState + 1);
    setCounter(counter + 1); 
    // console.log(feedbackType)
  };
  return (
    <div className={css.pageStyle}>
      <Description/>
      <Options/>
      <Feedback
      good={updateFeedback.good}
      neutral={updateFeedback.neutral}
      bad={updateFeedback.bad}
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
