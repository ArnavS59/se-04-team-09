import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/login.component";
import Header from "./components/Header";
import Instructor from "./components/instructor.component";
import Student from "./components/student.component";
import InstructorInspectView from "./components/instructor.inspect.view";
import DecisionScreen from "./components/student.view1.component";
import FactoryProductionScreen from "./components/student.view2.component";
import StatusScreen from "./components/student.view3.component";
import GraphScreen from "./components/student.view4.component";


function App() {
  return (<Router>
    <div className="App">
      <Header />
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path="/student" component={Student} />
          <Route path="/instructor" component={Instructor} />
          <Route path="/instructorView" component={InstructorInspectView}/>
          <Route path="/studentDecision" component={DecisionScreen} />
          <Route path="/studentFactoryProduction" component={FactoryProductionScreen} />
          <Route path="/studentStatus" component={StatusScreen} />
          <Route path="/studentGraph" component={GraphScreen} />
        </Switch>
    </div></Router>
  );
}

export default App;
