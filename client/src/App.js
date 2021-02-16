import React from 'react'
import './App.css';
import {Switch, Route, NavLink, Redirect} from "react-router-dom";
import Card from './containers/Card';
import CardList from './containers/CardList';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={"/"}>Search</NavLink>
      </nav>
      <Switch>
        <Route path={"/"} exact component={CardList} />
        <Route path={"/card/:card"} exact component={Card} />
        <Redirect to={"/"} />
      </Switch>
      
    </div>
  );
}

export default App;
