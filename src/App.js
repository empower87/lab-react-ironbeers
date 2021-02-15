import React, { useEffect, useState } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom'
import Home from './Components/Home.js'
import Beers from './Components/Beers.js'
import RandomBeer from './Components/RandomBeer.js'
import NewBeer from './Components/NewBeer.js'
import SingleBeer from './Components/SingleBeer.js'


function App() {

  return (
    <div className="App">
      <header>
        <Link to="/">
          <i className="fa fa-home"></i>
        </Link>
      </header>

      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/Beers" render={(props) => <Beers {...props} />} />
        <Route exact path="/Beers/:id" render={(props) => <SingleBeer {...props} />} />
        <Route exact path="/RandomBeer" render={(props) => <RandomBeer {...props} />} />
        <Route exact path="/NewBeer" render={(props) => <NewBeer {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
