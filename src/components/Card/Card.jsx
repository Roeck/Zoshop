import { useContext } from 'react';

import { CartContext } from '../../contexts/Cart.context';
import Button from '../Button/Button';

import './card.styles.scss';

const Card = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext); 
  
  const addProductToCart = () => addItemToCart(product);
  
  return (
    <div className='card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button onClick={addProductToCart}>Add To Cart</Button>
    </div>
  );
};

export default Card;