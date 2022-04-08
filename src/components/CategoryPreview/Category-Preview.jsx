import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../Card/Card';

import './category-preview.styles.scss';

const CategoryPreview = ({ title, products }) => (
  <div className='category-preview-container'>
    <h2>
      <Link className='title' to={title}>{title.toUpperCase()}</Link>
    </h2>
    <div className='preview'>
      {products
        .filter((_, idx) => idx < 4)
        .map((product) => (
          <Card key={product.id} product={product} />
        ))}
    </div>
  </div>
);

export default CategoryPreview;