import React from 'react';
import { FormElement } from './types';

export default class CheckboxGroup extends React.Component<FormElement> {
  render() {
    return (
      <label className="checkbox-group">
        <input className="checkbox" type="checkbox" ref={this.props.reference} />
        <div className="checkbox-label">{this.props.label}</div>
      </label>
    );
  }
}