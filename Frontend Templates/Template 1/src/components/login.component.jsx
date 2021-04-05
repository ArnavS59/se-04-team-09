import React from "react";
import "./style.scss";

import loginImg from "./MAA.gif";

import { FormErrors } from './FormErrors.js';

export default class Login extends React.Component {
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

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="" />
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" value={this.state.email} onChange={(event) => this.handleUserInput(event)} />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" value={this.state.password} onChange={(event) => this.handleUserInput(event)} />
            </div>

            <div className="footer">
                <button type="submit" className="btn" formAction="/student"> Login as Student </button>
                <button type="submit" className="btn" formAction="/instructor">Login as Instructor</button>
            </div>

          </form>
        </div>
        <div>
          <FormErrors formErrors={this.state.formErrors} />
        </div>
      </div>
    );
  }
}

/* 

export default class Login extends React.Component {

  render() {
    return (
      <div className="base-container" >
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email"  />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password"  />
            </div>
            <div className="footer">
                <button type="submit" className="btn" formAction="/student">
                    Login as Student
                </button>
            </div>
           </form>
        </div>


      </div>
    );
  }
} */