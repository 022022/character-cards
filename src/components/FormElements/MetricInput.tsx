import React from 'react';
import { FormElement } from './types';


export default class MetricInput extends React.Component<FormElement> {
  render() {
    return (
      <label className="field-group validated">
        {this.props.label}
        <input
          className="input-field shorter"
          type="number"
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
