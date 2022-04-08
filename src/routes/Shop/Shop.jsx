import React, { useContext } from 'react';

import Card from '../../components/Card/Card';
import { CategoriesContext } from '../../contexts/Categories.context';
import CategoryPreview from '../../components/CategoryPreview/Category-Preview';

import './shop.styles.scss';

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    
    return (
        <div className='shop-container'>
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return <CategoryPreview key={title} title={title} products={products} />;
            })}
        </div>
    );
};

export default Shop;