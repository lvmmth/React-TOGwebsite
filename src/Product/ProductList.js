import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

const getProducts = (product) => {
    return (
        <div className="card-deck">
            {
                product.map(product => <ProductCard key={product.id} product={product} />)
            }
        </div>
    );
};

const ProductList = (props) => (
    <div>
        {getProducts(props.movies)}
    </div>
);

ProductList.defaultProps = {
    movies: []
};

ProductList.propTypes = {
    movies: PropTypes.array
};

export default ProductList;