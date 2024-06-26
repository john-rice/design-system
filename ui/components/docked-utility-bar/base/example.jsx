// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import ButtonIcon from '../../button-icons/';
import classNames from 'classnames';

const exampleDemoStyles = `
  height: 540px;
  overflow: hidden;
  padding-top: 50px;

  .slds-utility-bar_container {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .slds-utility-bar,
  .slds-utility-panel {
    position: absolute;
  }
`;

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

export let UtilityPanel = props => (
  <div
    className={classNames(
      'slds-utility-panel slds-grid slds-grid_vertical',
      props.className
    )}
    role="dialog"
    aria-labelledby="panel-heading-01"
  >
    <div className="slds-utility-panel__header slds-grid slds-shrink-none">
      <div className="slds-media slds-media_center">
        <div className="slds-media__figure slds-m-right_x-small">
          <span className="slds-icon_container">
            <SvgIcon
              className="slds-icon slds-icon_small slds-icon-text-default"
              sprite="standard"
              symbol="call"
            />
          </span>
        </div>
        <div className="slds-media__body">
          <h2 id="panel-heading-01">{props.header || 'Header'}</h2>
        </div>
      </div>
      <div className="slds-col_bump-left slds-shrink-none">
        <ButtonIcon
          className="slds-button_icon"
          symbol="minimize_window"
          assistiveText="Close Panel"
          title="Close Panel"
        />
      </div>
    </div>
    <div className="slds-utility-panel__body">{props.children}</div>
  </div>
);

export let UtilityBarItem = props => (
  <li
    className={classNames(
      'slds-utility-bar__item',
      {
        'slds-has-notification': props.notification,
        'slds-utility-bar__item_pop-out': props.hasPopOut
      },
      props.className
    )}
  >
    <button
      className={classNames('slds-button slds-utility-bar__action', {
        'slds-is-active': props.active
      })}
      aria-pressed={!!props.active}
    >
      {props.notification ? (
        <abbr
          className="slds-indicator_unread"
          title="Unread Item"
          aria-label="Unread Item"
        >
          <span className="slds-assistive-text">●</span>
        </abbr>
      ) : null}
      <SvgIcon
        className="slds-button__icon slds-button__icon_left"
        sprite="utility"
        symbol={props.symbol}
      />
      <span className="slds-utility-bar__text">{props.children}</span>
      {props.hasPopOut && (
        <span className="slds-assistive-text">
          : is popped out in new window
        </span>
      )}
    </button>
  </li>
);

export let UtilityBar = props => (
  <footer className="slds-utility-bar_container" aria-label="Utility Bar">
    <h2 className="slds-assistive-text">Utility Bar</h2>
    <ul className={classNames('slds-utility-bar', props.className)}>
      {props.children}
    </ul>
    {props.panel}
  </footer>
);

const PanelOpen = (
  <UtilityPanel className="slds-is-open" header="Call">
    <div className="slds-align_absolute-center">Utility Panel Body</div>
  </UtilityPanel>
);

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export const Context = props => (
  <div className="demo-only demo-only_viewport" style={{ height: '540px' }}>
    {props.children}
  </div>
);

const defaultComponent = (
  <UtilityBar
    panel={
      <UtilityPanel header="Call">
        <div className="slds-align_absolute-center">Utility Panel Body</div>
      </UtilityPanel>
    }
  >
    <UtilityBarItem symbol="call">Call</UtilityBarItem>
    <UtilityBarItem symbol="clock">History</UtilityBarItem>
    <UtilityBarItem symbol="note">Notes</UtilityBarItem>
    <UtilityBarItem symbol="omni_channel">
      <span className="slds-m-bottom_xxx-small">Online</span>
      <span>Omni-Channel</span>
    </UtilityBarItem>
  </UtilityBar>
);

export default defaultComponent;

export let states = [
  {
    id: 'default',
    label: 'Default',
    demoStyles: exampleDemoStyles,
    element: defaultComponent
  },
  {
    id: 'open',
    label: 'Panel Open',
    demoStyles: exampleDemoStyles,
    element: (
      <UtilityBar panel={PanelOpen}>
        <UtilityBarItem symbol="call" active>
          Call
        </UtilityBarItem>
        <UtilityBarItem symbol="clock">History</UtilityBarItem>
        <UtilityBarItem symbol="note">Notes</UtilityBarItem>
        <UtilityBarItem symbol="omni_channel">
          <span className="slds-m-bottom_xxx-small">Online</span>
          <span>Omni-Channel</span>
        </UtilityBarItem>
      </UtilityBar>
    )
  },
  {
    id: 'notification',
    label: 'Item has notification',
    demoStyles: exampleDemoStyles,
    element: (
      <UtilityBar>
        <UtilityBarItem symbol="call">Call</UtilityBarItem>
        <UtilityBarItem symbol="clock">History</UtilityBarItem>
        <UtilityBarItem symbol="note">Notes</UtilityBarItem>
        <UtilityBarItem symbol="omni_channel" notification>
          <span className="slds-m-bottom_xxx-small">Online</span>
          <span>Omni-Channel</span>
        </UtilityBarItem>
      </UtilityBar>
    )
  },
  {
    id: 'pop-out',
    label: 'Item has popout',
    demoStyles: exampleDemoStyles,
    element: (
      <UtilityBar>
        <UtilityBarItem symbol="call">Call</UtilityBarItem>
        <UtilityBarItem hasPopOut active symbol="clock">
          History
        </UtilityBarItem>
        <UtilityBarItem symbol="note">Notes</UtilityBarItem>
        <UtilityBarItem symbol="omni_channel">
          <span className="slds-m-bottom_xxx-small">Online</span>
          <span>Omni-Channel</span>
        </UtilityBarItem>
      </UtilityBar>
    )
  }
];
