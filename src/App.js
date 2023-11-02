import './App.css';
import Textfields from './textComponent.js';
import FormButton from './button.js';
import AddEditKpiTextboxJSON from './textComponent.js';
import jsonData from './JsonTextBoxData';


// export default function Header() {
//   return (
//   <>
//   <div className='header'>
//      <Textfields teamName="Team"/>
//   </div>
//   <div>
//     <FormButton buttonName="Back"/>
//     <FormButton buttonName="Save"/>
//   </div>
  
  
//   </>
//   );
const App = () => {
  

  return (
    <>
    <div>
      <h1>Dev Central</h1>
      {jsonData.map((item) => (
        <AddEditKpiTextboxJSON 
            key = {item.id}
            item = {item}
        />
      ))}
     
    </div>
    
    <div>
      <FormButton buttonName="Back"/>
      <FormButton buttonName="Save"/>
    </div>
    </>

  );
};

export default App;