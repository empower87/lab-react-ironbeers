import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import newbeer from '../new-beer.png'
import randbeer from '../random-beer.png'
import allBeers from '../beers.png'
import RandomBeer from './RandomBeer.js'
import NewBeer from './NewBeer.js'

function Home(props) {
    return (
        <div>
            <div>
                <Link to="/Beers">
                    <img src={allBeers} alt="" className={'home-images'}/>
                </Link>
                <h1>All Beers</h1>
            </div>
            <div>
                <Link to="/RandomBeer">
                    <img src={randbeer} alt="" className={'home-images'}/>
                </Link>
                <h1>Random Beer</h1>
            </div>
            <div>
                <Link to="/NewBeer">
                    <img src={newbeer} alt="" className={'home-images'}/>
                </Link>
                <h1>New Beer</h1>
            </div>
        </div>
    );
}

export default Home;