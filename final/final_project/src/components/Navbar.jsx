import React from 'react';
import { useState } from 'react';
import './Navbar.css';

function NavBar({ setPage }) {
  const [exploreOpen, setExploreOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function go(event, page) {
      event.preventDefault();
      setPage(page);
      setExploreOpen(false);
      setMenuOpen(false);
  }

  function toggleExplore() {
    setExploreOpen(!exploreOpen);
  }

  function toggleMenu() {
    setMenuOpen(!menuOpen); 
  }



  
  return (
    <nav>
        <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`menu ${menuOpen ? 'open' : ''}`}>
        <li><a href="#" onClick={ (event) => go(event, "Home") }>Home</a></li>
        <li className = "dropdown">
          <a href="#" onClick={toggleExplore}>Explore</a>
            {exploreOpen && (
                <ul className="dropdown-content ">
                   <li><a href="#" onClick={ (event) => go(event, "Villagers") }>Villagers</a></li>
                  <li><a href="#" onClick={(event) => go(event, "Fish")}>Fish</a></li>
                </ul>
            )}
        </li>
        <li><a href="#" onClick={ (event) => go(event, "News") }>News</a></li>
      </ul>
    </nav> 
  );
}

export default NavBar;