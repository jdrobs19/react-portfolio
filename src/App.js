import React, {useState} from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
// import Portfolio from './components/Portfolio';
import Nav from './components/Nav';

function App() {

  const [categories] = useState([
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    // { name: 'Portfolio', id: 'portfolio' },
    { name: 'Resume', id: 'resume' },
  ])

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
    
    setTimeout(() => {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 80;
      
      // If About is clicked, scroll to the about section with offset for sticky header
      if (category.name === 'About') {
        const aboutSection = document.querySelector('.about-section');
        if (aboutSection) {
          const targetPosition = aboutSection.offsetTop - headerHeight - 10;
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
      }

      if (category.name === 'Skills') {
        const skillsSection = document.querySelector('#skills');
        if (skillsSection) {
          const targetPosition = skillsSection.offsetTop - headerHeight - 10;
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
      }
      
      // If Resume is clicked, scroll to the Willis section with offset for sticky header
      if (category.name === 'Resume') {
        const willisSection = document.querySelector('#experience');
        if (willisSection) {
          const targetPosition = willisSection.offsetTop - headerHeight - 10;
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
      }
    }, 0);
  };

 const renderCategory = () => {
    switch (currentCategory.name) {
      // case 'Portfolio':
      //   return <Portfolio />;
      case 'Resume':
        return <About />;
      // case 'Contact':
      //   return <Contact />
      default:
        return <About />
    }
  }

  return (
    <div>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <Nav categories={categories} setCurrentCategory={handleCategoryClick} currentCategory={currentCategory} />
      <main id="main-content">
        {renderCategory()}
      </main>

      <Footer />
    </div>
  );
}

export default App;
