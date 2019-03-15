import React, { Component } from 'react';
import ProductList from './ProductList';
import ProductService from '../services/ProductService';

export default class Products extends Component {

    constructor() {
        super();

        this.state = {
            products: []
        };
    }

    componentDidMount() {
        this.setState(() => ({ products: ProductService.getProducts() }));
    }

    render() {
        return (
            <div className="container-fluid" style={{marginLeft: '-15px'}}>
                <div className="d-flex flex-row">                    
                    <div className="col-sm-12">
                        <ProductList products={this.state.products} />
                    </div>
                </div>
            </div>
        );
    }
}