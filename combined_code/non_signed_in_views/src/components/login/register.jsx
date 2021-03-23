import React,{useState, useEffect} from "react";
import { Form } from "../login/form";

export const Register = ()=> {

  const[state, setState] = useState({
    name: "",
    username: "",
    email: "",
    password: ""
  })


  function handleFormchange (e) {
     const value = e.target.value;
     setState({
       ...state,
       [e.target.name]: value   
     });
  }

  const handleFormSubmit = ()=> {
    fetch('http://localhost:5000/app/register', {
      mode: 'no-cors',
      method : "POST",
      body: JSON.stringify({
        name : state.name,
        username : state.username,
        email : state.email,
        password : state.password
      }),
      headers: {
        "Conent-type": "application/json; charset=UTF-8"
      }
      
    })
    //console.log(pw)
  }
  return (
    <>
    <Form userInput = {state} onFormChange = {handleFormchange} onFormSubmit = {handleFormSubmit}/>
    </>
  )
}