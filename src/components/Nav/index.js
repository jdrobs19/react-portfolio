import React, { useEffect } from 'react';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory
  } = props;

  useEffect(() => {
  document.title = `${currentCategory.name} | Jordan Roberts`;
  }, [currentCategory]);
  
  return (
    <header>
      <div className="header-name">
        <h1>Jordan Roberts</h1>
        <p className="contact-info">
          Herriman, UT | <a href="mailto:jdrobs19@gmail.com">jdrobs19@gmail.com</a> | <a href="tel:+18014550430">801-455-0430</a>
        </p>
      </div>
      <nav aria-label="Primary navigation">
        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              <button
                className={currentCategory.name === category.name ? 'selectedCategory' : ''}
                type="button"
                onClick={() => setCurrentCategory(category)}
              >{category.name}</button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;