import React from 'react'

const Cart = ({ cartItems }) => {
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
    return (
      <div className="container mt-4">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? <p>Cart is empty</p> : 
          cartItems.map(item => (
            <div key={item.id} className="d-flex justify-content-between border-bottom p-2">
              <img src={item.image} alt={item.name} width="50" height="50" className="me-3" />
              <span>{item.name} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))
        }
        <h4 className="mt-3">Total: ${totalPrice.toFixed(2)}</h4>
      </div>
    );
  };
  
  export default Cart;