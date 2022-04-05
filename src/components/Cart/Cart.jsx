import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/bag.svg';

import { CartContext } from '../../contexts/Cart.context';

import './cart.styles.scss';

const Cart = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  
  return (
    <div className='icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};

export default Cart;