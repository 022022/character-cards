import React from 'react';
import { FormElement } from './../types';

import styles from './StringInput.module.css';
import formStyles from './../../Form/Form.module.css';

export default class StringInput extends React.Component<FormElement> {
  render() {
    return (
      <label className={`${formStyles['field-group']} ${formStyles.validated}`}>
        {this.props.label}
        <input
          className={styles['input-field']}
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
