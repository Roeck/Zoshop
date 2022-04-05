import React from 'react';
import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import Cart from '../../components/Cart/Cart';
import Dropdown from '../../components/Dropdown/Dropdown';

import { UserContext } from '../../contexts/User.context';
import { CartContext } from '../../contexts/Cart.context';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { signOutUser } from '../../utils/firebase/firebase';

import './navbar.styles.scss';

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {currentUser? (
            <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
          ) : ( 
          <Link className='nav-link' to='/auth'>
            SIGN IN
          </Link>
          )}
          <Cart />
        </div>
        {isCartOpen && <Dropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;