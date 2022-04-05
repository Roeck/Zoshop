import React from 'react';

import Button from '../Button/Button';

import './dropdown.styles.scss';

const Dropdown = () => (
    <div className='dropdown-container'>
        <div className='cart-items' />
        <Button>GO TO CHECKOUT</Button>
    </div>
);

export default Dropdown;