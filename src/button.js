import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function FormButton({buttonName}) {
return(
<>
    <Button variant="primary">{buttonName}</Button>
</>
);
}

