import React, { Component } from 'react';
import styled from 'styled-components';
import ProductView from './ProductView';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(200px, 1fr));
    margin: 20px;
    margin-top: 50px;
    padding: 10px;
    background-color: #ffffff; 
`;

const ProductItem = styled.div`
    & > img {
        padding: 5px;
        width: 200px;
        height: 200px;
        overflow: hidden;
    }
`;


class ProductListing extends Component {
    state = {
        selectedProduct: {},
        open: false
    }

    onModalClose = () => {
        this.setState({
            selectedProduct: {},
            open: false
        })
    }

    onSelection = (product) => {
        this.setState({
            selectedProduct: product,
            open: true
        })
    }

    renderProducts(products) {
        return products.map(product => {
            return (
                <ProductItem onClick={() => this.onSelection(product)}>
                    <img src={product.image} />
                </ProductItem>
            )
        })
    }

    render() {
        let { open, selectedProduct } = this.state;
        let { products } = this.props;
        return (
            <Wrapper>
                {this.renderProducts(products)}
                <ProductView open={open} close={this.onModalClose} product={selectedProduct} />
            </Wrapper>
        )
    }
}

export default ProductListing;