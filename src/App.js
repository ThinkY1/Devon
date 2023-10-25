import './App.css';
import Textfields from './textComponent.js';
import FormButton from './button.js';


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
  const jsonData = [
    {id:1, label: 'Team'},
    {id:2, label: 'Sprint'},
    {id:3, label: 'Sprint End'}
  ];

  return (
    <>
    <div>
      <h1>Dev Central</h1>
      <Textfields data={jsonData} />
    </div>

    <div>
      <FormButton buttonName="Back"/>
      <FormButton buttonName="Save"/>
    </div>
    </>

  );
};

export default App;