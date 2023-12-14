import './App.css';
import Textfields from './textComponent.js';
import FormButton from './button';
import AddEditKpiTextboxJSON from './textComponent.js';
import jsonData from './JsonTextBoxData.json';
import { SprintSummary } from './SummaryTable';
import KPIForm from './Form.js';



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
    {
      <div>
        <KPIForm/>
        <SprintSummary/>
      </div>


     }
     </>
    
    /* <div>
      <h1>Dev Central</h1>
      {jsonData.map((item) => (
        <AddEditKpiTextboxJSON 
            key = {item.id}
            item = {item}
        />
      ))}
     
    </div>
    
    <div>
      <br>

      </br>
      <FormButton buttonName="Back"/>
      <FormButton buttonName="Save"/>
    </div>

         <div className="summaryTable"> 
    <SprintSummary/>
    </div> 
    
*/

    
    
    
    
  );
};

export default App;