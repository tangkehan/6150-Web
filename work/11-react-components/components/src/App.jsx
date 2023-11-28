import { useState } from 'react';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import Villagers from './pages/Villagers';
import Home from './pages/Home';
import Events from './pages/Events';


function App() {
  const [page, setPage] = useState('Home');
  return (

      <div className = 'root-container'>
        <Header />
        <NavBar setPage={setPage} />
        <main>
          { (page === 'Home') && <Home/> }
          {page === 'Villagers' && <Villagers />}
          {page === 'Events' && <Events />}
        </main>
        <Footer />
      </div>

  );
};

export default App;
