import React from 'react';
import {Link} from 'react-router-dom' 
import logo from '../logo.svg';

export default function Navbar(){
    return(
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="https://reactjs.org">
            <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
            LearnReact
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <Link to='/' className="nav-item nav-link">MyHome</Link>
                <Link to='/gold' className="nav-item nav-link">MyGold</Link>
                <Link to='/contact' className="nav-item nav-link">MyContact</Link>
                <Link to='/about' className="nav-item nav-link">AboutMe</Link>
                </div>
            </div>
        </nav>
    )
}