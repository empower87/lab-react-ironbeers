import React from 'react';
import newbeer from '../new-beer.png'

function NewBeer(props) {
    return (
        <div>
            <img src={newbeer} alt="" className={'home-images'}/>
            <h1>New Beer</h1>
        </div>
    );
}

export default NewBeer;