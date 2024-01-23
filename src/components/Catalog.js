import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import merchandises from '../data/merchandises';

class Catalog extends Component {
  render() {
    return (
      <div>
        {merchandises.map((merchandise) => (
          <div key={merchandise.id}>
            <h3>{merchandise.name}</h3>
            <p>Price: {merchandise.price}</p>
            <p>Sale <input type="checkbox" /></p>
            <Link to={`/product/${merchandise.id}`}>
              <button>Деталі товару</button>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Catalog;