import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import merchandises from '../data/merchandises';
import { useCheckbox, CheckboxProvider } from '../contexts/CheckboxContext';

class Catalog extends Component {
  render() {
    return (
      <CheckboxProvider>
        <CatalogContent />
      </CheckboxProvider>
    );
  }
}

const CatalogContent = () => {
  const { isChecked, toggleCheckbox } = useCheckbox();

  const handleCheckboxChange = (id) => {
    toggleCheckbox(); // Ми використовуємо той самий стан для всіх чекбоксів, але ви можете змінити логіку за необхідності
    const checkboxState = isChecked ? 'checked' : 'unchecked';
    localStorage.setItem(`checkbox_${id}`, checkboxState);
  };

  const getCheckboxState = (id) => {
    return localStorage.getItem(`checkbox_${id}`) === 'checked';
  };

  return (
    <div>
      {merchandises.map((merchandise) => (
        <div key={merchandise.id}>
          <h3>{merchandise.name}</h3>
          <p>Price: {merchandise.price}</p>
          <p>
            Sale{' '}
            <input
              type="checkbox"
              checked={getCheckboxState(merchandise.id)}
              onChange={() => handleCheckboxChange(merchandise.id)}
            />
          </p>
          <Link to={`/product/${merchandise.id}`}>
            <button>Деталі товару</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Catalog;
