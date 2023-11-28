import React from 'react';
import './header_style.css';
import logo from './Sesame.jpeg';


const Header = () => {
    function NavBar({ setPage }) {
        function go(event, page) {
          event.preventDefault();
          setPage(page);
      }
    }
      
    return (
        <header>
            <img className = "logo" src = {logo} alt="logo" />
            <h1>ANIMAL CROSSING</h1>
            <nav>
                <ul className = "menu">
                    <li><a href="" onClick={ (e) => go(e, "Home") }>Home</a></li>
                    <li ><a href="villagers.html">Villagers</a></li>
                    <li><a href="event.html">Events</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;