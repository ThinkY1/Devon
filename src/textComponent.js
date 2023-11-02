import React, {useState} from "react";
import jsonData from './JsonTextBoxData';


  function AddEditKpiTextboxJSON({item}) {
        const [inputValue, setInputValue] = useState('');
    

    const handleChange = (event) => {
      setInputValue(event.target.value)
    };

    return (
      <div>
        < label htmlFor={item.leftLabel}>{item.leftLabel}:</label>
        <input
           type="text"
           id = {item.leftLabel}
           value={inputValue}
           onChange={handleChange}
        />
        <label htmlFor={item.rightLabel}>{item.rightLabel}</label>
      </div>
    );

 } 
  
  export default AddEditKpiTextboxJSON;

