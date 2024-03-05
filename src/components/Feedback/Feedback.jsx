// rafce - сніпет
import css from './Feedback.module.css';
// import Options from '../Options/Options';

const Feedback = ({Options}) => {
 
  return (
   <ul className={css.feedbackBox}>
    
    <li>
      <p>Good: {Options}</p> 
    </li> 
    <li>
      <span>Neutral: {Options}</span>
    </li> 
    <li>
      <span>Bad: {Options}</span>
    </li>  
       
   </ul>
  )
}

export default Feedback

/* <span  >{updateFeedback.counter}</span> */
/* <span >{updateFeedback.counter}</span> */
/* <span >{updateFeedback.counter}</span> */
// {good=0, neutral=0, bad=0}

