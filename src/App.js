import React, {useState} from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Resume from './components/Resume';

function App() {

  const [categories] = useState([
    { name: 'About', id: 'about' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Contact', id: 'contact' },
    { name: 'Resume', id: 'resume' }
  ])

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

 const renderCategory = () => {
    switch (currentCategory.name) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <Contact />
      default:
        return <About />
    }
  }

  return (
    <div>
      <Header />
      <Nav categories={categories} setCurrentCategory={setCurrentCategory} currentCategory={currentCategory} />
      <main>
        {renderCategory()}
      </main>

      <Footer />
    </div>
  );
}

export default App;
