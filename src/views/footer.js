import React from 'react';
import logo from '../logo.svg';

export default function Footer(){
    return(
    <footer className="footer mt-auto py-3">
    <div className="container">
        <a className="navbar-brand" href="https://reactjs.org">
        <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
        LearnReact
        </a>
        <p>by Whyna</p>
    </div>
    </footer>
    )
}