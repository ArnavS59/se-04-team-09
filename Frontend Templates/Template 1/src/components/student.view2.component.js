import React, { Component } from "react";

var inverntory = 12;
var demand = 5;
var incomingShip = 7;
var outgoingShip = 9;
var order = 3;
var cost = 15.5;

export default class FactoryProductionScreen extends Component {
    render() {

        return (
            <form>
                <div className="App">
                    <div className="auth-wrapper">
                        
                            <h5>FACTORY INFROMATION FOR THE LAST TEN WEEKS</h5>
                            <br/>

                            <table className="table table-striped table-bordered table-sm">
                                <thead>
                                    <tr>
                                        <th>Week</th>
                                        <th>Inv/Bk</th>
                                        <th>Demand</th>
                                        <th>Incom. ship</th>
                                        <th>Outg. ship</th>
                                        <th>Order Placed</th>
                                        <th>Current cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>{inverntory}</td>
                                        <td>{demand}</td>
                                        <td>{incomingShip}</td>
                                        <td>{outgoingShip}</td>
                                        <td>{order}</td>
                                        <td>{cost+3}</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>{inverntory}</td>
                                        <td>{demand}</td>
                                        <td>{incomingShip}</td>
                                        <td>{outgoingShip}</td>
                                        <td>{order}</td>
                                        <td>{cost+5}</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>{inverntory+3}</td>
                                        <td>{demand-2}</td>
                                        <td>{incomingShip}</td>
                                        <td>{outgoingShip}</td>
                                        <td>{order}</td>
                                        <td>{cost+6.5}</td>
                                    </tr>
                                </tbody>
                            </table>
                    
                    </div>

                    
                </div>
                <div className="button-place1">
                    <button className="btn btn-warning btn-block" formAction="/studentDecision">Back to Game</button>        
                </div>

                <div className="button-place2">
                    <button className="btn btn-warning btn-block" formAction="/studentGraph">Go to Graph</button>        
                    <button className="btn btn-warning btn-block" formAction="/studentStatus">Check Others' Order</button>
                </div>

            </form>
        );
    }
}