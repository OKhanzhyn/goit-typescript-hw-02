import css from './Options.module.css';
// import { useState } from 'react';

const Options = ({updateFeedback}, {setCounter}) => {
// console.log(updateFeedback)
  
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
      <li>
      <button onClick={() => setCounter(0)} type='button'>Reset</button>
      </li> 
    </ul>
  )
}

export default Options

