import css from './Options.module.css';
// import { useState } from 'react';

const Options = (updateFeedback) => {
// console.log(updateFeedback)
  
  return (
    <ul className={css.optonsList}>
      <li>
      <button onClick={updateFeedback} type='button'>Good</button>
      </li>
      <li>
      <button onClick={updateFeedback} type='button'>Neutral</button>
      </li>
      <li>
      <button onClick={updateFeedback} type='button'>Bad</button>
      </li>
      
    </ul>
  )
}

export default Options

/* <li>
      <button>Reset</button>
      </li> */