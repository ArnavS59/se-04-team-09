import React from 'react';
import loginImg from "../../logo.png";

export const Form = ({userInput, onFormChange, onFormSubmit}) =>{

     const handlechange = (e) => {
        onFormChange(e)
     }  
     const handleSubmit = (e) => {
         e.preventDefault()
         onFormSubmit()
     }

     return (
        <form onSubmit = {handleSubmit}>
       <div className="base-container">
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="register"/>
          </div>
          
          <div className="form">
          <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name"  value = {userInput.name} onChange={handlechange}/>
            </div>
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
              
            </div>
          </div>
          
        </div>
        <div className="footer">
          <input type="Submit" className="btn">
          </input>
        </div>
      </div>
      </form>
     )
}
