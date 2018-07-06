import React, { Component } from 'react';
import styled from 'styled-components';
import { Menu, Segment, Sidebar } from 'semantic-ui-react'

const MenuBarTitle = styled.div`
    margin-top: 8px;
    margin-bottom: 40px;
    text-align: center;
    font-size: 20px;
    font-family: Georgia, serif;
    font-style: italic;
    text-decoration: underline;
`;

class SideNav extends Component {

    renderMenuItems = () => {
        return menuItems.map(item => {
            return (
                <Menu.Item as='a'>
                    {item.name}
                </Menu.Item>
            )
        })
    }

    render() {
        let { children, visible } = this.props;
        return (
            <Sidebar.Pushable as={Segment}>
                <Sidebar
                    as={Menu}
                    animation='push'
                    onHide={this.handleSidebarHide}
                    vertical
                    visible={visible}
                    width='thin'
                >
                    <MenuBarTitle>Menu</MenuBarTitle>
                    {this.renderMenuItems()}
                </Sidebar>

                <Sidebar.Pusher>
                    {children}
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        )
    }
}

const menuItems = [
    {
        name: "Artwork"
    },
    {
        name: "Bookmarks"
    },
    {
        name: "Contact"
    },
    {
        name: "Shopping Cart"
    },
    {
        name: "Payment"
    },
]

export default SideNav;