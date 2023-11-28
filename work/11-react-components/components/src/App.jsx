
import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Text from './components/Text';


function App() {

  return (
    <>
      <div className = 'root-container'>
        <Header />
        <main>
          <Text />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
