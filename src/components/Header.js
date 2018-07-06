import React, { Component } from 'react';
import styled from 'styled-components';
import ClearButton from './ClearButton';

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    height: 40px;
    line-height: 40px;
    width: 100%;
    background-color: #ffffff;
    box-shadow: -1px 4px 20px -1px rgba(0,0,0,0.5);
`

const MenuButton = styled(ClearButton)`
    && {
        position: absolute;
        left: 0;
        font-size: 1.2em;
    }
`
const Logo = styled.span`
    font-size: 22px;
    font-family: Georgia, serif;
    color: #3D8128;
`

class Header extends Component {
    render() {
        let { onMenuClick } = this.props;
        return (
            <StyledHeader>
                <MenuButton icon='bars' onClick={onMenuClick} />
                <Logo>
                    NOBLE
                </Logo>
            </StyledHeader>
        )
    }
}

export default Header;