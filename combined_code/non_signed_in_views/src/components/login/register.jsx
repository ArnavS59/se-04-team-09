import React,{useState, useEffect} from "react";
import loginImg from "../../logo.png";
import { Form } from "../login/form";

export const Register = ()=> {

  const[state, setState] = useState({
    username: "",
    email: "",
    password: ""
  })
  useEffect(()=>{
    fetch ('/app/user').then (Repsonse => {
      if(Response.ok){
        return Repsonse.json()
      }
    }).then (data =>console.log(data))
  },[])


  function handleFormchange (e) {
     const value = e.target.value;
     setState({
       ...state,
       [e.target.name]: value   
     });
  }

  const handleFormSubmit = ()=> {
    console.log('here')
    fetch('http://localhost:5000/app/user', {
      mode: 'no-cors',
      method : "POST",
      body: JSON.stringify({
        name : state.username,
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