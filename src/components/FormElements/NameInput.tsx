import React from 'react';
import { FormElement } from './types';


export default class NameInput extends React.Component<FormElement> {
  render() {
    return (
      <label className="field-group validated">
        {this.props.label}
        <input
          className="input-field"
          type="text"
          ref={this.props.reference}
        />
        { this.props.error &&
          <div className="error-message" >
            {this.props.error}
          </div>
        }

      </label>
    );
  }
}
