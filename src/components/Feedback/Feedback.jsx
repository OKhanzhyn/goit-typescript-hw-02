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