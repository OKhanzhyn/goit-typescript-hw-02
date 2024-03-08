import css from './Options.module.css';

const Options = ({updateFeedback, total, handleReset}) => {
  
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
      
      {total > 0 ?<li>
      <button onClick={handleReset} type='button'>Reset</button>
      </li> : ""}
    </ul>
  )
}

export default Options

