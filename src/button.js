import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

// export default function FormButton({buttonName}) {
// return(
// <>
//     <Button variant="primary">{buttonName}</Button>
// </>
// );
// }

const FormButton = ({onClickHandler,buttonName}) =>
{
    const handleSaveClick = () => 
    {
        onClickHandler();
        alert(`${buttonName} button clicked! data saved successfully!`);
    }    
    return (
        <Button variant="primary" onClick={handleSaveClick}>
            {buttonName}
        </Button> 
    );
}

export default FormButton;