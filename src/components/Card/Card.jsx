import './card.styles.scss';

import Button from '../Button/Button';

const Card = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className='card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button>Add to cart</Button>
    </div>
  );
};

export default Card;