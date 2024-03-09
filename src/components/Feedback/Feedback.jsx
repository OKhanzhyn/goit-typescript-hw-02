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
      <span>Total: {counter.totalFeedback}</span>
    </li>  
    <li className={css.fedbackItem}>
      <span>Positive: {counter.prosFeedbacks} %</span>
    </li>     
   </ul>   
  )
}
export default Feedback
