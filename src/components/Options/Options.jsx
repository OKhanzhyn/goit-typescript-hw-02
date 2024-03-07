import css from './Options.module.css';
// import { useState } from 'react';

const Options = ({updateFeedback, setCounter, totalFeedback}, feedbackType) => {
  
  return (
    <ul className={css.optionsList}>
      <li>
      <button onClick={()=>updateFeedback("good")} type='button'>Good</button>
      </li>
      <li>
      <button onClick={()=>updateFeedback("neutral")} type='button'>Neutral</button>
      </li>
      <li>
      <button onClick={()=>updateFeedback("bad")} type='button'>Bad</button>
      </li>
      
      {totalFeedback > 0 ? <li>
      <button onClick={() => setCounter(feedbackType)} type='button'>Reset</button>
      </li> : ""}
    </ul>
  )
}

export default Options

