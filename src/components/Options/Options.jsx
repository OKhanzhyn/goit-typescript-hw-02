import css from './Options.module.css';
// import { useState } from 'react';

const Options = ({updateFeedbackGood ,updateFeedbackNeutral, updateFeedbackBad}) => {
// console.log(updateFeedback)
  
  return (
    <ul className={css.optonsList}>
      <li>
      <button onClick={updateFeedbackGood} type='button'>Good</button>
      </li>
      <li>
      <button onClick={updateFeedbackNeutral} type='button'>Neutral</button>
      </li>
      <li>
      <button onClick={updateFeedbackBad} type='button'>Bad</button>
      </li>
      
    </ul>
  )
}

export default Options

/* <li>
      <button>Reset</button>
      </li> */