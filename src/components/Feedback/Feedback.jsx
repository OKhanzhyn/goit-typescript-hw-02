// rafce - сніпет
import css from './Feedback.module.css';

const Feedback = (counter) => {
  return (
   <ul className={css.feedbackBox}>
    
    <li className={css.fedbackItem}>
      <p>Good: {counter.good}</p> 
    </li> 
    <li className={css.fedbackItem}>
      <span>Neutral: {counter.neutral}</span>
    </li> 
    <li className={css.fedbackItem}>
      <span>Bad: {counter.bad}</span>
    </li>  
    <li className={css.fedbackItem}>
      <span>Total: {counter.good + counter.neutral + counter.bad}</span>
    </li>  
    <li className={css.fedbackItem}>
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