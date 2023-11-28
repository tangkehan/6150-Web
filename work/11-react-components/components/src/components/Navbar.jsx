import React from 'react';
import './navBar_style.css';

function NavBar({ setPage }) {
    function go(event, page) {
      event.preventDefault();
      setPage(page);
  }
    return (
      <nav>
        <ul className = 'menu'>
          <li><a href="#" onClick={ (event) => go(event, "Home") }>Home</a></li>
          <li><a href="#" onClick={ (event) => go(event, "Villagers") }>Villagers</a></li>
          <li><a href="#" onClick={ (event) => go(event, "Events") }>Events</a></li>
        </ul>
      </nav> 
  );
}

export default NavBar;