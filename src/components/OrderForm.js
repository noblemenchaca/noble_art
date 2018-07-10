import React, { Component } from 'react';
import { Modal, Form, Checkbox, Button } from 'semantic-ui-react';

class OrderForm extends Component {
    render() {
        return (
            <Modal dimmer={'blurring'} size={'medium'} open>
                <Modal.Header>Order Form</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Field>
                            <label>First Name</label>
                            <input placeholder='First Name' />
                        </Form.Field>
                        <Form.Field>
                            <label>Last Name</label>
                            <input placeholder='Last Name' />
                        </Form.Field>
                        <Form.Field>
                            <Checkbox label='I agree to the Terms and Conditions' />
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Modal.Content>
            </Modal>
        )
    }
}

export default OrderForm;