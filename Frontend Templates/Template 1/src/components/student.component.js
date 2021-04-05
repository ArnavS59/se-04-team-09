import React, { Component } from "react";

var position = "Retailer";
var gameNumber = 1;
var password = 2567;

export default class student extends Component {
    render() {
        return (
            <form>
                <nav class="navbar navbar-expand-lg navbar-primary bg-light">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbar">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link" id="home" href="/">Home</a>
                        <a class="nav-item nav-link" id="logout" href="/stud-logout">Logout</a>
                    </div>
                    </div>
                </nav>                
                <div className="App">
                    <div className="auth-wrapper tilt-up">
                        <div className="auth-inner">
                            <h3>Hello Student</h3>
                            <h4>Welcome to the Beer Game:</h4>
                            <br/>
                            <p>Here are your login details:</p>
                            <table className="table table-bordered table-sm">
                                <tbody>
                                    <tr>
                                        <td>Round</td>
                                        <td>Game Number</td>
                                        <td>Position</td>
                                        <td>Password</td>
                                    </tr>
                                    <tr>
                                        <td>Test Round</td>
                                        <td>{gameNumber}</td>
                                        <td>{position}</td>
                                        <td>{password}</td>
                                    </tr>
                                    <tr>
                                        <td>Round 1</td>
                                        <td>{gameNumber + 2}</td>
                                        <td>{position}</td>
                                        <td>{password+1234}</td>
                                    </tr>
                                    <tr>
                                        <td>Round 2</td>
                                        <td>{gameNumber+5}</td>
                                        <td>{position}</td>
                                        <td>{password-1032}</td>
                                    </tr>
                                    <tr>
                                        <td>Round 3 (optional)</td>
                                        <td>{gameNumber + 12}</td>
                                        <td>{position}</td>
                                        <td>{password+3321}</td>
                                    </tr>
                                </tbody>
                            </table>

                            <br/>
                            
                            <button  className="btn btn-warning btn-block" formAction="/studentDecision"> Continue </button>
                            
                          
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}