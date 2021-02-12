import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Beers from './Components/Beers.js'
import RandomBeer from './Components/RandomBeer.js'
import NewBeer from './Components/NewBeer.js'

function App() {

  return (
    <div className="App">
      <header>
      </header>
      <Beers />
      {/* <RandomBeer />
      <NewBeer /> */}
    </div>
  );
}

export default App;
