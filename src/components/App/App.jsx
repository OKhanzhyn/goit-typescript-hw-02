import css from './App.module.css';
import Feedback from '../Feedback/Feedback'
import Description from "../Description/Description";
import Options from '../Options/Options';
import { useEffect, useState } from 'react';
import Notification from '../Notification/Notification';
const feedbackType = {
	good: 0,
	neutral: 0,
	bad: 0}
const App = () => {
  // const [counter, setCounter] = useState(feedbackType);  
    const [counter, setCounter] = useState(() => {
    const savedFeedbacks = localStorage.getItem("saved-feedbacks");
    if (!savedFeedbacks) return feedbackType;
  
    const parsedFeedbacks = JSON.parse(savedFeedbacks);
    return parsedFeedbacks;
  });  
  const totalFeedback = counter.good + counter.neutral + counter.bad; 
  
useEffect(() => {
  localStorage.setItem("saved-feedbacks", JSON.stringify(counter));
}, [counter]);

const updateFeedback = feedbackType => {    
    setCounter({...counter, [feedbackType]: counter[feedbackType] + 1});     
  };
  return (
    <div className={css.pageStyle}>
      <Description/>
      <Options
      updateFeedback={updateFeedback}
      setCounter={setCounter}
      />
      {totalFeedback > 0 ? <Feedback
      good={counter.good}
      neutral={counter.neutral}
      bad={counter.bad}
      saved-feedbacks={counter}
      /> : ""}
      {totalFeedback === 0 ? <Notification/> : ""}
    </div>
  );};
export default App


// const [feedbacks, setFeedbacks] = useState(() => {
  //   const savedFeedbacks = window.localStorage.getItem("saved-feedbacks");
  //   if(savedFeedbacks !== null) {
  //     return JSON.parse(savedFeedbacks);
  //   }
  //   return 0;
  // })
  
//  useEffect(() => {
//   window.localStorage.setItem("saved-feedbacks", JSON.stringify(feedbacks));
//  }, [feedbacks]);

// const [showFeedback, setShowFeedback] = useState(false);

// const handleToggleFeedback = () => {
//     setShowFeedback(!showFeedback);
//   };

// onClose={handleToggleFeedback}

// setCounter({...counter, good: counter.good + 1}); 
    // setCounter({...counter, neutral: counter.neutral + 1});     
    // setCounter({...counter, bad: counter.bad + 1});  

 // good={updateFeedback}
      // neutral={updateFeedback}
      // bad={updateFeedback}

/* <Feedback
      Good={feedbackList.good}
      Neutral={feedbackList.neutral}
      Bad={feedbackList.bad}
      /> */
