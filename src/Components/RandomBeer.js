import React, { useEffect, useState } from 'react';
import axios from 'axios'

//https://ih-beers-api2.herokuapp.com/beers/random
function RandomBeer(props) {
    console.log(randBeer)
    const [randBeer, setRandBeer] = useState({})

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
             .then((res) => {
                 setRandBeer(res.data)
             })
    }, [])

    return (
        <div className='single-beer'>
            <h1>Hello</h1>
            <div className="single-beer-image">
                <img src={randBeer.image_url} />
            </div>
            <div>
                <h1>{randBeer.name}</h1>
                <h3>{randBeer.attenuation_level}</h3>
            </div>
            <div>
                <h4>{randBeer.tagline}</h4>
                <h6>{randBeer.first_brewed}</h6>
            </div>
            <div>
                <p>{randBeer.description}</p>
                <p>{randBeer.contributed_by}</p>
            </div>
        </div>
    );
}

export default RandomBeer;