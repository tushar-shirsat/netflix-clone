import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" 
                alt="netflix" 
                className="navbar__logo" />
            <img src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" 
                alt="smiley_face" 
                className="navbar__face" />
        </div>
    )
}

export default Navbar
