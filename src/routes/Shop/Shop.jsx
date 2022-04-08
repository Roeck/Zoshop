import React, { useContext, Fragment } from 'react';

import Card from '../../components/Card/Card';
import { CategoriesContext } from '../../contexts/Categories.context';

import './shop.styles.scss';

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    
    return (
        <Fragment>
         {Object.keys(categoriesMap).map((title) => (
            <Fragment key={title}>
                <h2>{title}</h2>
                 <div className='products-container'>
                    {categoriesMap[title].map((product) => (
                        <Card key={product.id} product={product} />
                    ))}
                 </div>
            </Fragment>
         ))}
        </Fragment>
    );
};

export default Shop;