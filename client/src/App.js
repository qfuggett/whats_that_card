import React from 'react'
import './App.css';
import {Switch, Route} from "react-router-dom";
import Card from './containers/Card';
import CardList from './containers/CardList';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={"/"} exact component={CardList} />
        <Route path={"/card/:card"} exact component={Card} />
        <Redirect to={"/"} />
      </Switch>
      
    </div>
  );
}

export default App;
