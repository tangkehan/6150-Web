import React from 'react';
import './header_style.css';
import logo from './Sesame.jpeg';



const Header = () => {     
    return (
        <header>
            <img className = "logo" src = {logo} alt="my cutie baby" />
            <h1>ANIMAL CROSSING</h1>
        </header>
    );
};

export default Header;