import React from 'react'
import ProductCard from '../ProductCard';

const ProductList = ({ products,addToCart  }) => {
    return (
        <div className="row">
        {products.length === 0 ? (
          <h3 className="text-center text-danger">No products found</h3>
        ) : (
          products.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <ProductCard product={product} addToCart={addToCart}  />
            </div>
          ))
        )}
      </div>
    );
  };
  
  export default ProductList