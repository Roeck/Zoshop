import React, { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/bag.svg';

import { CartContext } from '../../contexts/Cart.context';

import './cart.styles.scss';

const Cart = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  
  return (
    <div className='icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default Cart;