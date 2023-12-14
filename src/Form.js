import React, {useState} from "react";
import FormButton from "./button";
import JsonTextBoxData from "./JsonTextBoxData.json";

const KPIForm = () =>{

   const [formFields, setFormFields] = useState(JsonTextBoxData.KpiFormFields);

   const handleInputChange = (e, fieldId) => {

    const {value} = e.target;
    setFormFields((prevFields) =>
        prevFields.map((field) => 
         field.id === fieldId ? {...field, value} : field 
        )
    );
   };

   const handleSaveClick = () =>
   {
    const formDataObject = {};
    formFields.forEach((field) => {
        formDataObject[field.id] = field.value;
    });
    console.log('Form data saved:', formDataObject);
   };

   return (
    <form>
        {formFields.map((field) => (
            <div key={field.id}>
             <label>
                {field.leftLabel}:
                <input 
                  type="text"
                  name={field.id}
                  value={field.value}
                  onChange={(e) => handleInputChange(e, field.id)}
                />
             </label>
             <br/>
            </div>
        ))}
        <FormButton buttonName="Back"/>

        <FormButton onClickHandler={handleSaveClick} buttonName="Save"/>
    </form>
   )
};

export default KPIForm;
