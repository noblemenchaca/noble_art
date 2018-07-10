import React, { Component } from 'react';
import styled from 'styled-components';
import ProductView from './ProductView';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(220px, 1fr));
    justify-items: center;
    margin: 20px;
    margin-top: 50px;
    padding: 10px;
    background-color: #ffffff; 
`;

const ProductItem = styled.div`
    height: 200px;
    width: 200px;
    margin: 5px;
    background: url(${props => props.image}) 50% 50% no-repeat; /* 50% 50% centers image in div */
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
                <ProductItem onClick={() => this.onSelection(product)} image={product.image} />
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