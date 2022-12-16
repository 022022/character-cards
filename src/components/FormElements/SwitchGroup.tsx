import React from 'react';
import { FormElement } from './types';

export default class SwitchGroup extends React.Component<FormElement> {
  render() {
    return (
      <div className="switch-group">
        <label className="character__switch-label">
          <input type="checkbox" ref={this.props.reference} />
          <span className="character__switch-slider switch-studied"></span>
        </label>
        <div>{this.props.label}</div>
      </div>
    );
  }
}