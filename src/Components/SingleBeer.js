import React, { useEffect, useState } from 'react';
import axios from 'axios';


function SingleBeer(props) {
    const [thisBeer, setThisBeer] = useState({})

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${props.match.params.id}`)
             .then((res) => {
                 setThisBeer(res.data)
             })
    }, [])

    console.log(props.match.params.id)
    return (
        <div className='single-beer'>
            <div className="single-beer-image">
                <img src={thisBeer.image_url} />
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