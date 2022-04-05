import React, { useContext } from 'react';

import { CartContext } from '../../contexts/Cart.context';

import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';

import './dropdown.styles.scss';

const Dropdown = () => {
    const { cartItems } = useContext(CartContext);
    
    return (
        <div className='dropdown-container'>
            <div className='cart-items'>
                {cartItems.map ((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    );
};

export default Dropdown;