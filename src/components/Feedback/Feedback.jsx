// rafce - сніпет
import css from './Feedback.module.css';

const Feedback = ({good, neutral, bad}) => {
//  console.log(Options)

  return (
   <ul className={css.feedbackBox}>
    
    <li>
      <p>Good: {good}</p> 
    </li> 
    <li>
      <span>Neutral: {neutral}</span>
    </li> 
    <li>
      <span>Bad: {bad}</span>
    </li>  
       
   </ul>
   
  )
}

export default Feedback


