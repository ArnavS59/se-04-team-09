import React, { Component } from "react";

var holdingCost = 0.5;
var backorderCost = 1;
var downstream = "Distributor";
var current = "Factory";
var upstream = "Brewery";
var shipDelay1 = 2;
var shipDelay2 = 1;
var infoDelay1 = 2;
var infoDelay2 = 1;

export default class GraphScreen extends Component {
    render() {

        return (
            <form>
              
                <div className="App">
                    <div className="auth-wrapper tilt-up">
                        <h5>Inventory and Order Status plots For Factory</h5>
                         
                        <br/>
                        <p>
                            <button className="btn btn-dark btn-outline-secondary">Demand plot</button> 
                            <button className="btn btn-dark btn-outline-secondary button-space">Order plot</button>
                        </p>
                        <p>
                            <button className="btn btn-dark btn-outline-secondary">Inv/Backorderplot</button> 
                            <button className="btn btn-dark btn-outline-secondary button-space">Plot all</button>
                        </p>
                        
                        <br/>

                        <b>Supply Chain Settings for Factory:</b>
                        <p>Holding cost : <b>{holdingCost}</b></p>
                        <p>Backorder cost : <b>{backorderCost}</b></p>
                        <p>Downstream player : <i className= "red">{downstream}</i></p>
                        <p>Upstream player : <i className= "green">{upstream}</i></p>
                        <p>
                            Shipping Dealy : <b className="red">{shipDelay1} wks</b> ({current} -> {downstream})
                            <b className="red"> {shipDelay2} wks</b> ({upstream} -> {current})
                        </p>
                        <p>
                            Information Dealy : <b className="green">{infoDelay1} wks</b> ({downstream} -> {current})
                            <b className="red"> {infoDelay2} wks</b> ({current} -> {upstream})
                        </p>

                    </div>
                    
                    <div className="button-place1">
                        <button className="btn btn-warning btn-block" formAction="/studentDecision">Back to Game</button>        
                    </div>

                    <div className="button-place2">
                        <button className="btn btn-warning btn-block" formAction="/studentFactoryProduction">Go to Fatory Info</button>        
                        <button className="btn btn-warning btn-block" formAction="/studentStatus">Check Others' Order</button>
                    </div>
                </div>
            </form>
        );
    }
}