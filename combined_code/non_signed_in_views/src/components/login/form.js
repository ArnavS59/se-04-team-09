import React from 'react';
import loginImg from "../../logo.png";

export const Form = ({userInput, onFormChange, onFormSubmit}) =>{

     const handlechange = (e) => {
        onFormChange(e)
     }  
     const handleSubmit = (e) => {
         console.log('here in foirm')
         e.preventDefault()
         onFormSubmit()
     }

     return (
       <div className="base-container">
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="register"/>
          </div>
          <form onSubmit = {handleSubmit}>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username"  value = {userInput.username} onChange={handlechange}/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" value={userInput.email} onChange={handlechange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" value = {userInput.password} onChange={handlechange}/> 
              <input type="Submit" className="btn"></input>
            </div>
          </div>
          </form>
        </div>
        <div className="footer">
          <input type="Submit" className="btn">
          </input>
        </div>
      </div>
     )
}
