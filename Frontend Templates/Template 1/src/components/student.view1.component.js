import React, { Component } from "react";

var demand = 3;
var backorder = 0;
var beginInv = 15;
var incomingShip = 0;
var weekNo = 4;
var unitsShipped = 0;

export default class DecisionScreen extends Component {
    render() {

        return (
            <form>
                <div className="App">
                    <div className="auth-wrapper">
                        
                        <h5 className="centered">For Week {weekNo}</h5>
                        <br/>

                        <table className="table table-bordered table-sm">
                            <tbody>
                                <tr>
                                    <td>
                                        <p>Begining Inventory : <b> {demand}</b> </p> 
                                        <p>Incoming Shipment : <b className="red">{backorder}</b> </p> 
                                        <p>On Total Requirement : <b className="blue">{demand + backorder}</b> </p> 
                                    </td>
                                    <td>
                                        <p>Demand from Distributor : <b> {beginInv}</b> </p> 
                                        <p>On Backorder : <b className="green">{incomingShip}</b> </p> 
                                        <p>Total Available : <b className="blue">{beginInv + incomingShip}</b> </p>
                                    </td>
                                    
                                </tr>
                            </tbody>
                        </table>
                        <br/>
                        <p className="centered">Units Shipped to Distributor this week : <b className="green">{unitsShipped}</b></p>
                        <p className="centered">Ending inventory <b className="blue">{beginInv - unitsShipped}</b></p>
                        <br/>
                        <p className="cetered">Enter the number of units to be purchased from Brewery : <input type="number" id="unitsShipped" class="mytext"></input></p>

                    </div>

                    <div className="footerbtn">
                <div className="button-place1">
                    <button className="btn btn-warning btn-block" formAction="/studentGraph">Go to Graph</button>
                    <button className="btn btn-warning btn-block" formAction="/studentFactoryProduction">Go to Fatory Info</button>        
                </div>

                <div className="button-place2">
                    <button type="submit" className="btn btn-warning btn-block">Submit</button>
                    <button className="btn btn-warning btn-block" formAction="/studentStatus">Check Others' Order</button>
                </div>
                </div>
                    
                </div>


            </form>
        );
    }
}