import React from 'react';
import './button.styles.scss';

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button className="button" {...otherProps} >
      {children}
      Sign Up
    </button>
  );
};

export default Button;