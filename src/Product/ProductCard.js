import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = (props) => (
    <div className="product-card">
        <div className="product-card card">
            <img className="card-img-top" src={props.product.imageUrl} alt="" />
            <div className="card-body">
                <h4 className="card-title">{props.product.title}</h4>
                <h6 className="card-subtitle mb-2 text-muted">{props.product.subtitle}</h6>
                <p className="text-justify" style={{fontSize: '14px'}}>{props.product.description}</p>
            </div>
            <div className="card-footer">
                <div className="clearfix">
                    <div className="float-left mt-1">
                        
                    </div>
                    <div className="card-footer-badge float-right badge badge-primary badge-pill">{props.product.rating}</div>
                </div>
            </div>
        </div>
    </div>
);

ProductCard.defaultProps = {
    product: {}
};

ProductCard.propTypes = {
    product: PropTypes.object
};

export default ProductCard;