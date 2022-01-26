import React from 'react';
import ReactLogo from '../images/react-logo.png'

export default function Navbar() {
    return (
        <nav className="navbar">
            <a className="navbar-brand" href="#Home">
                <img src={ReactLogo} alt="logo" id='react-logo'/>
                <h1>ReactFacts</h1>
            </a>
            <div>
                <h2 className="h2-style">React Course - Project 1</h2>
            </div>
        </nav>
    )
}
