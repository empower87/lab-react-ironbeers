import React from 'react';
import randbeer from '../random-beer.png'

function RandomBeer(props) {
    return (
        <div>
            <img src={randbeer} alt="" className={'home-images'}/>
            <h1>Random Beer</h1>
        </div>
    );
}

export default RandomBeer;