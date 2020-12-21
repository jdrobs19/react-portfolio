import React from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
    
    <main className="App">
      <About/>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
