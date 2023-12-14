import React from 'react';
import './Header.css';
import logo from '../assets/LOGO.png';



const Header = () => {     
    return (
        <header>
            <img className = "logo" src = {logo} alt="animal crossing logo" />
            <h1 className = "header_title">ANIMAL CROSSING</h1>
        </header>
    );
};

export default Header;