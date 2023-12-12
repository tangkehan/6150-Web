import { useState } from 'react';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import Villagers from './pages/Villagers';
import Home from './pages/Home';
import News from './pages/News';
import Fish from './pages/Fish';

function App() {
  const [page, setPage] = useState('Home');
  return (

      <div className = 'root-container'>
        <a href="#main" className="skip">Skip to main content</a>
        <Header />
        <NavBar setPage={setPage} />
        <main id="main">
          { (page === 'Home') && <Home/> }
          {page === 'Villagers' && <Villagers />}
          {page === 'Fish' && <Fish />}
          {page === 'News' && <News />}
        </main>
        <Footer />
      </div>

  );
};

export default App;