import React, { useEffect } from 'react';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory
  } = props;

  useEffect(() => {
    document.title = currentCategory.name;
  }, [currentCategory]);
  
  return (
    <header>
      <div className="header-name">
        <h1>Jordan Roberts</h1>
        <p className="contact-info">Herriman, UT | jdrobs19@gmail.com | 801-455-0430</p>
      </div>
      <nav>
        <ul>
          {categories.map((category) => (
            <li
              className={` ${currentCategory.name === category.name && 'selectedCategory'}`}
              key={category.id} onClick={() => {
                setCurrentCategory(category);
              }}>{category.name}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;