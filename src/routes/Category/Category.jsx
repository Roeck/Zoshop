import React, { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import Card from '../../components/Card/Card';
import { CategoriesContext } from '../../contexts/Categories.context';

import './category.styles.scss';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);
    
    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])
    
    return (
        <Fragment>
            <h2 className="title">{category}</h2>
            <div className='category-container'>
                {products&&
                    products.map((product) => (
                        <Card key={product.id} product={product} />
                    ))}
            </div>
        </Fragment>
    );
};

export default Category;



