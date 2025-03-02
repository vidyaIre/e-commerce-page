import React from 'react'
import ProductCard from '../ProductCard';

const ProductList = ({ products, addToCart }) => {
    return (
      <div className="container mt-4">
        <div className="row">
          {products.map(product => (
            <div key={product.id} className="col-md-4">
              <ProductCard product={product} addToCart={addToCart} />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProductList