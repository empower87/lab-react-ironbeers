import React, { useEffect, useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home.js'
import Beers from './Components/Beers.js'
import RandomBeer from './Components/RandomBeer.js'
import NewBeer from './Components/NewBeer.js'
import SingleBeer from './Components/SingleBeer.js'


function App() {

  return (
    <div className="App">
      <header>
      </header>

      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/Beers" render={(props) => <Beers {...props} />} />
        <Route exact path="/Beers/:id" render={(props) => <SingleBeer {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
