import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../../Data/products.json';

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const product = productsData.find(p => p.id === parseInt(id));

  if (!product) return <h2 className="text-center mt-4">Product not found</h2>;

  return (
    <div className="container mt-4">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} className="img-fluid" />
      <p>{product.description}</p>
      <h3>${product.price}</h3>
      <button className="btn btn-success" onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;