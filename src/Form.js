import { useState} from 'react';
import NameInput from "./NameInput"
import EmailInput from "./EmailInput"
import Checkboxes from "./Checkboxes"
import SubmitButton from "./SubmitButton"

function Form () {

const [ nameInput,setNameInput] = useState('')

const [ emailInput,setEmailInput] = useState('')

const [checkboxState, setCheckboxState] = useState({
    cbArt: false,
    cbBurgers: false,
    cbCars: false,
    cbDancing: false,
  })

  const [isSubmitted, setIsSubmitted] = useState(false);

 
  
  const onCheckbox = (newState) => {
    setCheckboxState(newState)
  }

  
  const onNameInput = (newState) => {
    setNameInput(newState)
  }
  
  const onEmailInput = (newState) => {
    setEmailInput(newState)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const newSignup = {
      name: nameInput,
      email: emailInput,
      interests: checkboxState,
    };
    addNewSignup(newSignup);
    setIsSubmitted(true); 
  };


  async function addNewSignup(obj) {
    console.log(`Welcome, ${obj.name}`)
    console.log(obj)
  }


return (
<>
<form>
{isSubmitted && (
    <p>Thank you for signing up, {nameInput}!</p>
  )}

<NameInput onNameInput={onNameInput}/><br></br>
<EmailInput onEmailInput={onEmailInput}/><br></br>
<Checkboxes checkboxState={checkboxState} onCheckbox={onCheckbox} /><br></br>
<SubmitButton onSubmit={onSubmit}/>

</form>
</>
)}

export default Form