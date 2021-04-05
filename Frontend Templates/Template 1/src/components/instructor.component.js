import React, { Component } from "react";

var sysCost= 137.5;
var weeksCompleted= 8;


export default class Instructor extends Component {
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
                                <th scope="col">Time delay (weeks)</th>
                                <th scope="col">Is Wholesaler Present</th>
                                <th scope="col">Is Retailer Present</th>
                                <th scope="col">Current cost of system</th>
                                <th scope="col">Demand Pattern</th>
                                <th scope="col">Holding cost</th>
                                <th scope="col">Backorder cost</th>
                                <th scope="col">Number of weeks completed</th>
                                <th scope="col">Reset the Game</th>
                                <th scope="col">Stop/Continue this game</th>
                                <th scope="col">Week to stop</th>
                                <th scope="col">Player Passwords</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>
                                    <select id="timeDelay">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </td>
                                <td>
                                    <select id="isWholesaler">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </td>
                                <td>
                                    <select id="isRetailer">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </td>
                                <td>
                                    {sysCost}
                                </td>
                                <td>
                                    <select id="demandPattern">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="number" id ="holdingCost"></input>
                                </td>
                                <td>
                                     <input type="number" id ="backorderCsot"></input>
                                </td>
                                <td>
                                    {weeksCompleted}
                                </td>
                                <td>
                                    <button>Reset</button>
                                </td>
                                <td>
                                    <button>Freeze</button>
                                </td>
                                <td>
                                    <input type="number" id ="weeksToStop"></input>
                                </td>
                                <td>
                                    <button>Player pwds</button>
                                </td>
                                </tr>

                                <tr>
                                <th scope="row">2</th>
                                <td>
                                    <select id="timeDelay">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </td>
                                <td>
                                    <select id="isWholesaler">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </td>
                                <td>
                                    <select id="isRetailer">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </td>
                                <td>
                                    {sysCost}
                                </td>
                                <td>
                                    <select id="demandPattern">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="number" id ="holdingCost"></input>
                                </td>
                                <td>
                                     <input type="number" id ="backorderCsot"></input>
                                </td>
                                <td>
                                    {weeksCompleted}
                                </td>
                                <td>
                                    <button>Reset</button>
                                </td>
                                <td>
                                    <button>Freeze</button>
                                </td>
                                <td>
                                    <input type="number" id ="weeksToStop"></input>
                                </td>
                                <td>
                                    <button>Player pwds</button>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td>
                                    <select id="timeDelay">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </td>
                                <td>
                                    <select id="isWholesaler">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </td>
                                <td>
                                    <select id="isRetailer">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </td>
                                <td>
                                    {sysCost}
                                </td>
                                <td>
                                    <select id="demandPattern">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="number" id ="holdingCost"></input>
                                </td>
                                <td>
                                     <input type="number" id ="backorderCsot"></input>
                                </td>
                                <td>
                                    {weeksCompleted}
                                </td>
                                <td>
                                    <button>Reset</button>
                                </td>
                                <td>
                                    <button>Freeze</button>
                                </td>
                                <td>
                                    <input type="number" id ="weeksToStop"></input>
                                </td>
                                <td>
                                    <button>Player pwds</button>
                                </td>
                                </tr>

                                <tr>
                                <th scope="row">4</th>
                                <td>
                                    <select id="timeDelay">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </td>
                                <td>
                                    <select id="isWholesaler">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </td>
                                <td>
                                    <select id="isRetailer">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </td>
                                <td>
                                    {sysCost}
                                </td>
                                <td>
                                    <select id="demandPattern">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="number" id ="holdingCost"></input>
                                </td>
                                <td>
                                     <input type="number" id ="backorderCsot"></input>
                                </td>
                                <td>
                                    {weeksCompleted}
                                </td>
                                <td>
                                    <button>Reset</button>
                                </td>
                                <td>
                                    <button>Freeze</button>
                                </td>
                                <td>
                                    <input type="number" id ="weeksToStop"></input>
                                </td>
                                <td>
                                    <button>Player pwds</button>
                                </td>
                                </tr>

                                <tr>
                                <th scope="row">5</th>
                                <td>
                                    <select id="timeDelay">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </td>
                                <td>
                                    <select id="isWholesaler">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </td>
                                <td>
                                    <select id="isRetailer">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </td>
                                <td>
                                    {sysCost}
                                </td>
                                <td>
                                    <select id="demandPattern">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="number" id ="holdingCost"></input>
                                </td>
                                <td>
                                     <input type="number" id ="backorderCsot"></input>
                                </td>
                                <td>
                                    {weeksCompleted}
                                </td>
                                <td>
                                    <button>Reset</button>
                                </td>
                                <td>
                                    <button>Freeze</button>
                                </td>
                                <td>
                                    <input type="number" id ="weeksToStop"></input>
                                </td>
                                <td>
                                    <button>Player pwds</button>
                                </td>
                                </tr>

                                <tr>
                                <th scope="row">6</th>
                                <td>
                                    <select id="timeDelay">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </td>
                                <td>
                                    <select id="isWholesaler">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </td>
                                <td>
                                    <select id="isRetailer">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </td>
                                <td>
                                    {sysCost}
                                </td>
                                <td>
                                    <select id="demandPattern">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="number" id ="holdingCost"></input>
                                </td>
                                <td>
                                     <input type="number" id ="backorderCsot"></input>
                                </td>
                                <td>
                                    {weeksCompleted}
                                </td>
                                <td>
                                    <button>Reset</button>
                                </td>
                                <td>
                                    <button>Freeze</button>
                                </td>
                                <td>
                                    <input type="number" id ="weeksToStop"></input>
                                </td>
                                <td>
                                    <button>Player pwds</button>
                                </td>
                                </tr>

                                <tr>
                                <th scope="row">7</th>
                                <td>
                                    <select id="timeDelay">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </td>
                                <td>
                                    <select id="isWholesaler">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </td>
                                <td>
                                    <select id="isRetailer">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </td>
                                <td>
                                    {sysCost}
                                </td>
                                <td>
                                    <select id="demandPattern">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="number" id ="holdingCost"></input>
                                </td>
                                <td>
                                     <input type="number" id ="backorderCsot"></input>
                                </td>
                                <td>
                                    {weeksCompleted}
                                </td>
                                <td>
                                    <button>Reset</button>
                                </td>
                                <td>
                                    <button>Freeze</button>
                                </td>
                                <td>
                                    <input type="number" id ="weeksToStop"></input>
                                </td>
                                <td>
                                    <button>Player pwds</button>
                                </td>
                                </tr>

                                <tr>
                                <th scope="row">8</th>
                                <td>
                                    <select id="timeDelay">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </td>
                                <td>
                                    <select id="isWholesaler">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </td>
                                <td>
                                    <select id="isRetailer">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </td>
                                <td>
                                    {sysCost}
                                </td>
                                <td>
                                    <select id="demandPattern">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="number" id ="holdingCost"></input>
                                </td>
                                <td>
                                     <input type="number" id ="backorderCsot"></input>
                                </td>
                                <td>
                                    {weeksCompleted}
                                </td>
                                <td>
                                    <button>Reset</button>
                                </td>
                                <td>
                                    <button>Freeze</button>
                                </td>
                                <td>
                                    <input type="number" id ="weeksToStop"></input>
                                </td>
                                <td>
                                    <button>Player pwds</button>
                                </td>
                                </tr>

                                <tr>
                                <th scope="row">9</th>
                                <td>
                                    <select id="timeDelay">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </td>
                                <td>
                                    <select id="isWholesaler">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </td>
                                <td>
                                    <select id="isRetailer">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </td>
                                <td>
                                    {sysCost}
                                </td>
                                <td>
                                    <select id="demandPattern">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="number" id ="holdingCost"></input>
                                </td>
                                <td>
                                     <input type="number" id ="backorderCsot"></input>
                                </td>
                                <td>
                                    {weeksCompleted}
                                </td>
                                <td>
                                    <button>Reset</button>
                                </td>
                                <td>
                                    <button>Freeze</button>
                                </td>
                                <td>
                                    <input type="number" id ="weeksToStop"></input>
                                </td>
                                <td>
                                    <button>Player pwds</button>
                                </td>
                                </tr>

                                <tr>
                                <th scope="row">10</th>
                                <td>
                                    <select id="timeDelay">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </td>
                                <td>
                                    <select id="isWholesaler">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </td>
                                <td>
                                    <select id="isRetailer">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </td>
                                <td>
                                    {sysCost}
                                </td>
                                <td>
                                    <select id="demandPattern">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="number" id ="holdingCost"></input>
                                </td>
                                <td>
                                     <input type="number" id ="backorderCsot"></input>
                                </td>
                                <td>
                                    {weeksCompleted}
                                </td>
                                <td>
                                    <button>Reset</button>
                                </td>
                                <td>
                                    <button>Freeze</button>
                                </td>
                                <td>
                                    <input type="number" id ="weeksToStop"></input>
                                </td>
                                <td>
                                    <button>Player pwds</button>
                                </td>
                                </tr>

                                <tr>
                                <th scope="row">11</th>
                                <td>
                                    <select id="timeDelay">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </td>
                                <td>
                                    <select id="isWholesaler">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </td>
                                <td>
                                    <select id="isRetailer">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </td>
                                <td>
                                    {sysCost}
                                </td>
                                <td>
                                    <select id="demandPattern">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="number" id ="holdingCost"></input>
                                </td>
                                <td>
                                     <input type="number" id ="backorderCsot"></input>
                                </td>
                                <td>
                                    {weeksCompleted}
                                </td>
                                <td>
                                    <button>Reset</button>
                                </td>
                                <td>
                                    <button>Freeze</button>
                                </td>
                                <td>
                                    <input type="number" id ="weeksToStop"></input>
                                </td>
                                <td>
                                    <button>Player pwds</button>
                                </td>
                                </tr>

                                <tr>
                                <th scope="row">12</th>
                                <td>
                                    <select id="timeDelay">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </td>
                                <td>
                                    <select id="isWholesaler">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </td>
                                <td>
                                    <select id="isRetailer">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </td>
                                <td>
                                    {sysCost}
                                </td>
                                <td>
                                    <select id="demandPattern">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="number" id ="holdingCost"></input>
                                </td>
                                <td>
                                     <input type="number" id ="backorderCsot"></input>
                                </td>
                                <td>
                                    {weeksCompleted}
                                </td>
                                <td>
                                    <button>Reset</button>
                                </td>
                                <td>
                                    <button>Freeze</button>
                                </td>
                                <td>
                                    <input type="number" id ="weeksToStop"></input>
                                </td>
                                <td>
                                    <button>Player pwds</button>
                                </td>
                                </tr>
            
                            </tbody>
                        </table>
                    </div>
                    <button type="submit" className="btn btn-warning btn-block">Create Games</button>
                    <button className="btn btn-warning btn-block" formAction="/instructorView">Inspect Games</button>
                </div> 
            </form>
        );
    }
}