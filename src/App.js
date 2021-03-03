import React, { useEffect, useState } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom'
// import Home from './Components/Home.js'
import Home2 from './Components/Home2.js'
import NavBar from './Components/NavBar.js'


function App() {

  return (
    <div className="App">
      
      <Switch>
        <Route exact path="/" render={(props) => <Home2 {...props} />} />
        {/* <Route exact path="/Home" render={(props) => <Home {...props} />} /> */}
      </Switch>
      <NavBar />
    </div>
  );
}

export default App;
