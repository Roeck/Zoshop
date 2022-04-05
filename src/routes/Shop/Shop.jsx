import { useContext } from 'react';

import Card from '../../components/Card/Card';
import { ProductsContext } from '../../contexts/Products.context';

import './shop.styles.scss';


const Shop = () => {
    const { products } = useContext(ProductsContext);
    return (
        <div className="products-container">
            {products.map((product) => (
                <Card key={product.id} product={product} />
            ))}
        </div>
    )
}

export default Shop;