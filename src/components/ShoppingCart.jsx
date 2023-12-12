import React, { useReducer } from 'react';
import CartItem from './CartItem';

const cartReducer = (cartList, action) => {
  // Implement your reducer logic for adding/removing items
  let newCartList;

  return newCartList;
};

const ShoppingCart = () => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div className='cart-items'>
          {cart.map(item => (
            <CartItem key={item.id} item={item} dispatch={dispatch} />
          ))}
      </div>
    </div>
  )
}