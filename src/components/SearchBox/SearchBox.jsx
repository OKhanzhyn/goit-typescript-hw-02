// rafce - сніпет
import css from './SearchBox.module.css';
// import { useState } from 'react';

const SearchBox = ({inputValue, handleChange}) => {
 
  

  return (
    <div >
      <label className={css.filterBox}>
      <span>Find contacts by name</span>
      <input type="text" value={[inputValue]} onChange={handleChange} />
      
      </label>
    </div>
  );
};

export default SearchBox

/*onChange={(evt) => handleChange(evt)*/
/* <p>{[inputValue]}</p> */
/* <p>{inputValue}</p> */