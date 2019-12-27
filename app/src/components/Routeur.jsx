import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import TroisSelect from '../module/Select3Update/TroisSelect';
import Chart from '../module/chart/reactchart/Chart';


export default class Routeur extends Component {

  render() {
    return (
     
      <div className="App">

        <Switch>
          <Route exact path="/" component={Home} />
         <Route path="/select" component={TroisSelect} /> 
         <Route path="/chart/reactchart" component={Chart} /> 
      
         
          
        </Switch>
        
      </div>
  
    );
  }
}