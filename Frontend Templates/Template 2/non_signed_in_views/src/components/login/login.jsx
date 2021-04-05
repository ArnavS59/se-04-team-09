import React from "react";
import loginImg from "../../logo.png";
import { FormErrors } from './FormErrors.js';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: { email: '', password: '' },
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value },
      () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : ' is too short';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      passwordValid: passwordValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
  }

  handlemessage(m) {
    if(m === 'Success'){
      console.log('LoggenIn')
      alert(m)
      window.open('./newgame') // To be implement later. redirects after successful login
    } else {
      console.log(m)
      alert(m)
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:5000/app/login', {
      method : "POST",
      body: JSON.stringify({
        email : this.state.email,
        password : this.state.password
      }),
      headers: {
        "Access-Control-Allow-Origin" : "http://localhost:3000",
        "Access-Control-Allow-Headers" :"Origin, X-Requested-With, Content-Type, Accept",
        "Access-Control-Allow-Credentials" : true, 
        "Conent-type": "application/json; charset=UTF-8",
      }
      
    }).then(response => response.json())
      .then(message => this.handlemessage(message))
    //onFormSubmit()
  }

  render() {
    return (
      <form onSubmit = {(event) => this.handleSubmit(event)}>
      <div className="base-container" ref={this.props.containerRef}>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="login"/>
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" value={this.state.email} onChange={(event) => this.handleUserInput(event)} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" value={this.state.password} onChange={(event) => this.handleUserInput(event)} />
            </div>
          </div>
        </div>
        <div className="footer">
          <input type="Submit" className="btn" value = "Login"/>
        </div>
        <div>
          <FormErrors formErrors={this.state.formErrors} />
        </div>
      </div>
      </form>
    )
  }
}