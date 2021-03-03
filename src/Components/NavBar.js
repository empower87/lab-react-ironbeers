import React from 'react';
import mic from '../images/mic.svg'
import avatar from '../images/avatar.svg'
import avatar2 from '../images/avatar2.svg'
import social from '../images/social.svg'
import social2 from '../images/social2.svg'
import comment from '../images/comment.svg'

function NavBar(props) {
    return (
        <footer>
            <div className="social-buttons">
                <ul className="social-list">
                    <li><img className="social-icons" src={comment}></img></li>
                    <li><img className="social-icons" src={comment}></img></li>
                    <li><img className="social-icons" src={comment}></img></li>
                </ul>
            </div>
            <div className="nav-buttons">
                <ul className="neo-list">
                    <li><img className="button-icons" src={mic}></img></li>
                    <li><img className="button-icons" src={social2}></img></li>
                    <li><img className="button-icons" src={avatar2}></img></li>
                </ul>
            </div>
        </footer>
    );
}

export default NavBar;