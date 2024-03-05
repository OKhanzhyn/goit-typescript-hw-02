import css from './Options.module.css';
// import { useState } from 'react';

// import { useEffect } from "react";

const Options = ({updateFeedback}) => {

  // const [ counter, setCounter ] = useState(0);
  
 /* const updateFeedback = () => {
    // (feedbackType) // Тут використовуй сеттер, щоб оновити стан
    // setCounter((prevState) => prevState + 1);
    setCounter(counter + 1); 
  };*/

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
      {/* <li>
      <button>Reset</button>
      </li> */}
    </ul>
  )
}

export default Options

