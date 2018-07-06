import React from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

const ClearButton = styled(Button)`
    && {
        background-color: transparent;

        &:hover {
            background-color: transparent;
        }
    }
`;

export default ClearButton;