import React from 'react';
import './header_style.css';
import logo from '../assets/LOGO.png';



const Header = () => {     
    return (
        <header>
            <img className = "logo" src = {logo} alt="my cutie baby" />
            <h1 className = "header_title">ANIMAL CROSSING</h1>
        </header>
    );
};

export default Header;