// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {FormattedMessage} from 'react-intl';
import styled from 'styled-components';

const ProductBrandingFreeEditionContainer = styled.span`
    display: flex;
    align-items: center;

    > * + * {
        margin-left: 8px;
    }
`;

const ProductBrandingFreeEdition = (): JSX.Element => {
    return (
        <ProductBrandingFreeEditionContainer tabIndex={-1}>
            <FormattedMessage
                id='product_branding_team_edition.titlename'
                defaultMessage='Mattermost'
            />
        </ProductBrandingFreeEditionContainer>
    );
};

export default ProductBrandingFreeEdition;
