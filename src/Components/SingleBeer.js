import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Beers from './Beers.js'

function SingleBeer(props) {
    const [thisBeer, setThisBeer] = useState({})

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${props.match.params.id}`)
             .then(res => {
                 setThisBeer(res.data)
             })
    }, [])

    return (
        <div>
            <div>
                <img src={thisBeer.img_url} />
            </div>
            <div>
                <h1>{thisBeer.name}</h1>
                <h3>{thisBeer.attenuation_level}</h3>
            </div>
            <div>
                <h4>{thisBeer.tagline}</h4>
                <h6>{thisBeer.first_brewed}</h6>
            </div>
            <div>
                <p>{thisBeer.description}</p>
                <p>{thisBeer.contributed_by}</p>
            </div>
        </div>
    );
}

export default SingleBeer;