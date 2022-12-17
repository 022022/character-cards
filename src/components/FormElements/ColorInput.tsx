import React from 'react';
import { FormElement } from './types';

export default class ColorInput extends React.Component<FormElement> {
  render() {
    return (
      <label className="color-group">
        <div className="input-color-container">
          <input className="input-color" type="color" ref={this.props.reference} />
        </div>
        <div>{this.props.label}</div>
      </label>
    );
  }
}
