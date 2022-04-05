import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/bag.svg';

import './cart.styles.scss';

const Cart = () => {
  return (
    <div className='icon-container'>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};

export default Cart;