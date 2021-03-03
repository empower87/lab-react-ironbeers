import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'

function Home(props) {
    return (
        <div className="Home">
            <header>
                <div className="hammy"></div>
                <div className="hammy"></div>
                <div className="hammy"></div>
            </header>
            <div className="main-stuff">
                {/* <h1>Rhyme Time</h1> */}  
                <div className="middle-stuff">
                    <div className="bottom-stuff">
                        {/* <h1>Play stuff</h1> */}
                        <div className="suggestions sug-1">
                            <div className="button-text bt-1">
                                <h4>Current lyrics</h4>
                            </div>
                            <div className="text-area">
                            <p>I got 99 problems but a b* ain't one</p>
                            <p>done</p>
                            <p>fun</p>
                            <p>gun</p>
                            </div>
                        </div>
                        <div className="suggestions sug-2">
                            <div className="button-text bt-2">
                                <h4>Last line lyrics</h4>
                            </div>
                            <div className="text-area">
                                <p>There's vomit on my Sweater already</p>
                                <p>Mom's spaghetti</p>
                                <p>Ya mom's forgetti</p>
                                <p>Ur mom's in my beddy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;