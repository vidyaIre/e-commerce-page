import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import productsData from './Data/products.json';
import { useState } from 'react';
import ProductDetails from './components/ProductDetails';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const itemExists = prevCart.find(item => item.id === product.id);
      if (itemExists) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <Router>
      <Header cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} />
      <Routes>
        <Route path="/" element={<ProductList products={productsData} addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cart} />} />
        <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
      </Routes>
    </Router>
  );
};

export default App;