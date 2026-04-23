import React from 'react';

const Button = ({ children, onClick, variant = 'primary' }) => {
  return (
    <button className={tn btn-} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
