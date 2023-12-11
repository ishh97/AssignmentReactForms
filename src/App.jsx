import React, { useEffect } from 'react'
import { useState } from 'react'
import "./App.css"
function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [contact, setContact] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)
  // const [data, setData] = useState([]);

  const [formErrors, setFormErrors] = useState({})

  // let newData = []
  const HandleOnChange = e => {
    if (e.target.name == "firstName") {
      setFirstName(e.target.value)
      console.log(firstName)
    }
    else if (e.target.name == "lastName") {
      setLastName(e.target.value)
      console.log(lastName)
    }
    else if (e.target.name == "Contact") {
      setContact(e.target.value)
      console.log(contact)
    }
    else {
      setEmail(e.target.value)
      console.log(email)
    }
  }

  const validate = () =>{
    const RegexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    const RegexContact =/^\d{10}$/
    const errors = {}
    if (firstName === '') {
      errors.firstName = "First Name is required"}
   
    if (lastName === '') {
      errors.lastName = "Last Name is required"
    }
    
    if (email === '') {
      errors.email = "Email is required"
    } 
    else if (!RegexEmail.test(email)){
      errors.email = "Email not Valid"
    }
 
    if (contact === '') {
      errors.contact = "Contact is required"
    } 
    else if (!RegexContact.test(contact)){
      errors.contact = "Contact number is not valid"
    }
    
    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target)
    const errors = validate()
    setFormErrors(errors)
    if(Object.keys(errors).length===0){
      setIsSubmit(true)
    }
    
  } 
  useEffect(()=>{
    console.log(formErrors);
    if(Object.keys(formErrors).length ===0 ){
      console.log(firstName, lastName, email, contact)

    }
  },[formErrors])

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
      {isSubmit?<div className="success"><h3>Registration succesfull!</h3></div>:null}
        <div>
          <input type="text" placeholder='First Name' onChange={(e) => HandleOnChange(e)} name="firstName" />
        </div>
        <p>{formErrors.firstName}</p>
        <div>
          <input type="text" placeholder='Last name' name='lastName' onChange={(e) => HandleOnChange(e)} />
        </div>
        <p>{formErrors.lastName}</p>
        <div>
          <input type="text" placeholder='Email' name='Email' onChange={(e) => HandleOnChange(e)} />
        </div>
        <p>{formErrors.email}</p>
        <div>
          <input type="number" placeholder='Contact' name='Contact' onChange={(e) => HandleOnChange(e)} />
        </div>
        <p>{formErrors.contact}</p>
        <div>
          <button type='submit'>Register</button>
        </div>
      </form>
    </div>
  )
}

export default App