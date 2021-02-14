import React, { useEffect, useState } from 'react';
import axios from 'axios'
import '../App.css'
import { Link } from 'react-router-dom'

function Beers(props) {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
             .then(res => {
                console.log(res)
                setBeers(res.data)
             })
    }, [])

    const showBeers = () => {
        return beers.map((each) => {
            return (
                <li className={'listStyle'} key={each._id}>
                    <div className={'list-image'}>
                        <Link to={`/Beers/${each._id}`}>
                            <img src={each.image_url} />
                        </Link>
                    </div>
                    <div className={'list-details'}>
                        <h1>{each.name}</h1>
                        <h4>{each.tagline}</h4>
                        <p><b>Created by:</b> {each.contributed_by}</p>
                    </div>
                </li>
            )
        })
    }

    return (
        <div>
            <div className={'beer-list-container'}>
                {showBeers()}
            </div>
        </div>
    );
}

export default Beers;