import React, { Component } from 'react';
import styled from 'styled-components';
import { Modal, Button } from 'semantic-ui-react';

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
    render() {
        let { open, close } = this.props;
        let { image, description, name, price } = this.props.product;
        return (
            <StyledModal dimmer={'blurring'} size={'tiny'} open={open} onClose={close}>
                <ProductImageWrapper>
                    <img src={image} />
                </ProductImageWrapper>
                <Modal.Header>{name}</Modal.Header>
                <Modal.Description>
                    <p>{description}</p>
                </Modal.Description>
                <Modal.Actions>
                    <span>{price}</span>
                    <Button positive icon='cart' labelPosition='right' content='Purchase' />
                </Modal.Actions>
            </StyledModal>
        )
    }
}

export default ProductView;