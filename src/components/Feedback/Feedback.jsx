// rafce - сніпет
import css from './Feedback.module.css';
// import { useEffect } from 'react';

const Feedback = (counter) => {

  return (
   <ul className={css.feedbackBox}>
    
    <li>
      <p>Good: {counter.good}</p> 
    </li> 
    <li>
      <span>Neutral: {counter.neutral}</span>
    </li> 
    <li>
      <span>Bad: {counter.bad}</span>
    </li>  
    <li>
      <span>Total: {counter.good + counter.neutral + counter.bad}</span>
    </li>  
    <li>
      <span>Positive: {Math.round(((counter.good + counter.neutral) / (counter.good + counter.neutral + counter.bad)) * 100)} %</span>
    </li>     
   </ul>
   
  )
}

export default Feedback


// useEffect(() => {
//    const noFeedbacks = (totalFeedback) => {
//     if (totalFeedback > 0) {
//       // console.log(totalFeedback)
//       onClose();
//     }
//     else {
//       !onClose();
//     }
//   }
// }, [onClose]);