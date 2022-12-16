import React from 'react';
import { FormElement } from './types';

export default class FileInput extends React.Component<FormElement> {
  render() {
    return (
      <label className="field-group">
        <input
          type="file"
          className="file-selector"
          ref={this.props.reference}
        />
      </label>
    );
  }
}
