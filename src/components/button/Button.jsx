import React from 'react';
import './button.styles.scss';

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <div style="text-align:center;">
    <button className="button" {...otherProps} >
      {children}
      Sign Up
    </button>
    </div>
  );
};

export default Button;