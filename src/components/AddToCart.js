import React from 'react';
import { useSelector } from 'react-redux';

const AddToCart = () => {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <div>
      <h2>Cart Items</h2>
      {cartItems.map(item => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default AddToCart;
