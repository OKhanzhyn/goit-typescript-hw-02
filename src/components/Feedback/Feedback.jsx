// rafce - сніпет
import css from './Feedback.module.css';

const Feedback = (counter) => {
//  console.log(Options)

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


