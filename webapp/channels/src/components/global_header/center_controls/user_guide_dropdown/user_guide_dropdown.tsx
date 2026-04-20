// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {FormattedMessage, injectIntl} from 'react-intl';
import type {WrappedComponentProps} from 'react-intl';

import IconButton from 'components/global_header/header_icon_button';
import KeyboardShortcutsModal from 'components/keyboard_shortcuts/keyboard_shortcuts_modal/keyboard_shortcuts_modal';
import Menu from 'components/widgets/menu/menu';
import MenuWrapper from 'components/widgets/menu/menu_wrapper';
import WithTooltip from 'components/with_tooltip';

import {ModalIdentifiers} from 'utils/constants';

import type {PropsFromRedux} from './index';

type Props = WrappedComponentProps & PropsFromRedux;

type State = {
    buttonActive: boolean;
};

class UserGuideDropdown extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            buttonActive: false,
        };
    }

    openKeyboardShortcutsModal = (e: MouseEvent) => {
        e.preventDefault();
        this.props.actions.openModal({
            modalId: ModalIdentifiers.KEYBOARD_SHORTCUTS_MODAL,
            dialogType: KeyboardShortcutsModal,
        });
    };

    buttonToggleState = (menuActive: boolean) => {
        this.setState({
            buttonActive: menuActive,
        });
    };

    renderDropdownItems = (): React.ReactNode => {
        const {intl} = this.props;

        return (
            <Menu.Group>
                <Menu.ItemAction
                    id='keyboardShortcuts'
                    iconClassName='icon-keyboard-return'
                    onClick={this.openKeyboardShortcutsModal}
                    text={intl.formatMessage({id: 'userGuideHelp.keyboardShortcuts', defaultMessage: 'Keyboard shortcuts'})}
                />
            </Menu.Group>
        );
    };

    render() {
        const {intl} = this.props;
        const tooltipText = (
            <FormattedMessage
                id={'channel_header.userHelpGuide'}
                defaultMessage='Help'
            />
        );

        return (
            <MenuWrapper
                id='helpMenuPortal'
                className='userGuideHelp'
                onToggle={this.buttonToggleState}
            >
                <WithTooltip
                    title={tooltipText}
                >
                    <IconButton
                        icon={'help-circle-outline'}
                        onClick={() => {}} // icon button currently requires onclick ... needs to revisit
                        active={this.state.buttonActive}
                        aria-controls='AddChannelDropdown'
                        aria-expanded={this.state.buttonActive}
                        aria-label={intl.formatMessage({id: 'channel_header.userHelpGuide', defaultMessage: 'Help'})}
                    />
                </WithTooltip>
                <Menu
                    openLeft={false}
                    openUp={false}
                    id='AddChannelDropdown'
                    ariaLabel={intl.formatMessage({id: 'channel_header.userHelpGuide', defaultMessage: 'Help'})}
                >
                    {this.renderDropdownItems()}
                </Menu>
            </MenuWrapper>
        );
    }
}

export default injectIntl(UserGuideDropdown);
