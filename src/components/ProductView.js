import React, { Component } from 'react';
import request from 'request';
import styled from 'styled-components';
import { Modal, Button } from 'semantic-ui-react';
import OrderForm from './OrderForm';

const SHEET_API_ENDPOINT_URL = 'https://script.google.com/macros/s/AKfycbz3bvrA7FjZzUK01-A9u5VQLQyO7VO3vZ8Kmo5Plwd1fz1P6UU/exec';

const ProductImageWrapper = styled.div`
   margin: 0 auto;
   width: 100%;
  & > img {
       max-width: 300px;
       @media screen and (min-width: 768px) {
           max-width: 1080px;
       }
  }
`;

const StyledModal = styled(Modal)`
    width: unset !important;
`;

class ProductView extends Component {
    state = {
        ordering: false
    }

    handlePurchase = (e) => {
        e.preventDefault();
        let { id, image, date, description, name, price } = this.props.product;

        let data = {
            'ID': id, //ID 
            'Name': name, //name
            'Description': description, //description
            'Date': date, //date
            'Price': price, //price
            'Image URL': image //image url
        };

        let requestParams = `?ID=${encodeURIComponent(id)}&Name=${encodeURIComponent(name)}&Description=${encodeURIComponent(description)}&Date=${encodeURIComponent(date)}&Price=${encodeURIComponent(price)}&Image+URL=${encodeURIComponent(image)}`;

        request.get(SHEET_API_ENDPOINT_URL + requestParams);
        this.setState({
            ordering: true
        })
        //this.props.close();
    }

    render() {
        let { open, close, product } = this.props;
        let { image, description, name, price } = product;
        return (
            <StyledModal dimmer={'blurring'} size={'tiny'} open={open} onClose={close}>
                <ProductImageWrapper>
                    <img src={image} />
                </ProductImageWrapper>
                <Modal.Header>{name}</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <p>{description}</p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <span>{price}</span>
                    <Button positive onClick={this.handlePurchase} icon='cart' labelPosition='right' content='Purchase' />
                </Modal.Actions>
                {this.state.ordering ? <OrderForm product={product} /> : ''}
            </StyledModal>
        )
    }
}

export default ProductView;