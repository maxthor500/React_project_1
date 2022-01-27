import React from 'react';
import ReactLogo from '../images/react-logo.png'

export default function Navbar() {
    return (
        <nav className="navbar bg-black">
            <a className="navbar-brand bg-black" href="#Home">
                <img src={ReactLogo} alt="logo" id='react-logo' className="bg-black"/>
                <h1 className="bg-black">ReactFacts</h1>
            </a>
            <div className="bg-black">
                <h2 className="h2-style bg-black">React Course - Project 1</h2>
            </div>
        </nav>
    )
}
