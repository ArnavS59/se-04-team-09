import React, { Component } from "react";

var delay = 2;
var holdingCost = 0.5;
var backorderCost = 1;
var weeksCompleted = 8;
var factoryCost = 30;
var wholesalerCost = 45;
var retailerCost = 15;
var distributorCost = 25;
var totalCost = factoryCost + wholesalerCost + retailerCost + distributorCost ;

export default class InstructorInspectView extends Component {
    render() {
        return (
            <form>
                <div class="tableobject">
                    <br />
                    <div className="table-responsive">
                        <table className="table table-light table-bordered table-sm">
                            <thead>
                                <tr>
                                <th scope="col">Game Number</th>
                                <th scope="col">Game Settings <br/> (Delay, Holding Cost, Backorder Cost)</th>
                                <th scope="col">Total Cost <br/> (Weeks Completed)</th>
                                <th scope="col">Factory Cost (Weeks Completed)</th>
                                <th scope="col">Distributor Cost (Weeks Completed)</th>
                                <th scope="col">Wholesaler Cost (Weeks Completed)</th>
                                <th scope="col">Retailer Cost (Weeks Completed)</th>
                                <th scope="col">Graphical Plot</th>
                                <th scope="col">Stop/Continue the game</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>
                                    {delay} weeks , {holdingCost}, {backorderCost}
                                </td>
                                <td>
                                    Cost : {totalCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {factoryCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {distributorCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {wholesalerCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {retailerCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                     <button>Plot</button>
                                </td>
                                <td>
                                    <button>Freeze</button>
                                </td>
                                </tr>

                                <tr>
                                <th scope="row">2</th>
                                <td>
                                    {delay} weeks , {holdingCost}, {backorderCost}
                                </td>
                                <td>
                                    Cost : {totalCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {factoryCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {distributorCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {wholesalerCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {retailerCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                     <button>Plot</button>
                                </td>
                                <td>
                                    <button>Freeze</button>
                                </td>
                                </tr>

                                <tr>
                                <th scope="row">3</th>
                                <td>
                                    {delay} weeks , {holdingCost}, {backorderCost}
                                </td>
                                <td>
                                    Cost : {totalCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {factoryCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {distributorCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {wholesalerCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {retailerCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                     <button>Plot</button>
                                </td>
                                <td>
                                    <button>Freeze</button>
                                </td>
                                </tr>

                                <tr>
                                <th scope="row">4</th>
                                <td>
                                    {delay} weeks , {holdingCost}, {backorderCost}
                                </td>
                                <td>
                                    Cost : {totalCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {factoryCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {distributorCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {wholesalerCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {retailerCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                     <button>Plot</button>
                                </td>
                                <td>
                                    <button>Freeze</button>
                                </td>
                                </tr>

                                <tr>
                                <th scope="row">5</th>
                                <td>
                                    {delay} weeks , {holdingCost}, {backorderCost}
                                </td>
                                <td>
                                    Cost : {totalCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {factoryCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {distributorCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {wholesalerCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {retailerCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                     <button>Plot</button>
                                </td>
                                <td>
                                    <button>Freeze</button>
                                </td>
                                </tr>

                                <tr>
                                <th scope="row">6</th>
                                <td>
                                    {delay} weeks , {holdingCost}, {backorderCost}
                                </td>
                                <td>
                                    Cost : {totalCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {factoryCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {distributorCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {wholesalerCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {retailerCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                     <button>Plot</button>
                                </td>
                                <td>
                                    <button>Freeze</button>
                                </td>
                                </tr>

                                <tr>
                                <th scope="row">7</th>
                                <td>
                                    {delay} weeks , {holdingCost}, {backorderCost}
                                </td>
                                <td>
                                    Cost : {totalCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {factoryCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {distributorCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {wholesalerCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {retailerCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                     <button>Plot</button>
                                </td>
                                <td>
                                    <button>Freeze</button>
                                </td>
                                </tr>

                                <tr>
                                <th scope="row">8</th>
                                <td>
                                    {delay} weeks , {holdingCost}, {backorderCost}
                                </td>
                                <td>
                                    Cost : {totalCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {factoryCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {distributorCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {wholesalerCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {retailerCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                     <button>Plot</button>
                                </td>
                                <td>
                                    <button>Freeze</button>
                                </td>
                                </tr>

                                <tr>
                                <th scope="row">9</th>
                                <td>
                                    {delay} weeks , {holdingCost}, {backorderCost}
                                </td>
                                <td>
                                    Cost : {totalCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {factoryCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {distributorCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {wholesalerCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {retailerCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                     <button>Plot</button>
                                </td>
                                <td>
                                    <button>Freeze</button>
                                </td>
                                </tr>

                                <tr>
                                <th scope="row">10</th>
                                <td>
                                    {delay} weeks , {holdingCost}, {backorderCost}
                                </td>
                                <td>
                                    Cost : {totalCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {factoryCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {distributorCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {wholesalerCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {retailerCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                     <button>Plot</button>
                                </td>
                                <td>
                                    <button>Freeze</button>
                                </td>
                                </tr>

                                <tr>
                                <th scope="row">11</th>
                                <td>
                                    {delay} weeks , {holdingCost}, {backorderCost}
                                </td>
                                <td>
                                    Cost : {totalCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {factoryCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {distributorCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {wholesalerCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {retailerCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                     <button>Plot</button>
                                </td>
                                <td>
                                    <button>Freeze</button>
                                </td>
                                </tr>

                                <tr>
                                <th scope="row">12</th>
                                <td>
                                    {delay} weeks , {holdingCost}, {backorderCost}
                                </td>
                                <td>
                                    Cost : {totalCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {factoryCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {distributorCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {wholesalerCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                    Cost : {retailerCost} <br/>
                                    W.C. :  {weeksCompleted}
                                </td>
                                <td>
                                     <button>Plot</button>
                                </td>
                                <td>
                                    <button>Freeze</button>
                                </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>                
               </div> 
            </form>
        );
    }
}