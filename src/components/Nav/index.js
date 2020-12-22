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