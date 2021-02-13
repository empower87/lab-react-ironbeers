import React, { useEffect, useState} from 'react';
import allBeers from '../beers.png'
import axios from 'axios'
import '../App.css'

function Beers(props) {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/")
             .then(res => {
                console.log(res)
                setBeers(res.data)
             })
    }, [])

    const showBeers = () => {
        return beers.map((each) => {
            return (
                <li className={'listStyle'}>
                <div className={'list-image'}>
                    <img src={each.image_url} />
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
            <img src={allBeers} alt="" className={'home-images'}/>
            <h1>All Beers</h1>
            <div className={'beer-list-container'}>
                {showBeers()}
            </div>
        </div>
    );
}

export default Beers;