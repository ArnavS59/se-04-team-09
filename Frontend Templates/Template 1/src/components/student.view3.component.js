import React, { Component } from "react";

var gameNo = 1;
var weekNo = 4;
var factoryOrder = false;
var distributorOrder = false;

export default class StatusScreen extends Component {
    render() {

        return (
            <form>
              
                <div className="App">
                    <div className="auth-wrapper">
                        
                        <h5 className="centered">Status of other Supply Chain Channel Members Game {gameNo}</h5>
                        <i>This page will update automatically after a period of time.</i>

                        <br/>
                        <br/>
                        <p>When all players have completed the order for the current week,</p>
                        <p>the player will automatically receive a link to procede to next week.</p>

                        <br/>

                        <h6>Week {weekNo}</h6>
                        <p>Factory: <b>{factoryOrder ? "Has ordered" : "Has not ordered"}</b></p>
                        <p>Distributor: <b>{distributorOrder ? "Has ordered" : "Has not ordered"}</b></p>

                    </div>
                </div>

                <div className="button-place1">
                    <button className="btn btn-warning btn-block" formAction="/studentDecision">Back to Game</button>        
                </div>

                <div className="button-place2">
                    <button className="btn btn-warning btn-block" formAction="/studentGraph">Go to Graph</button>        
                    <button className="btn btn-warning btn-block" formAction="/studentFactoryProduction">Go to Fatory Info</button>
                </div>
            </form>
        );
    }
}