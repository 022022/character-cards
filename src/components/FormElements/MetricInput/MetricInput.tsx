import React from 'react';
import { FormElement } from './../types';

import styles from './MetricInput.module.css';
import formStyles from './../../Form/Form.module.css';

export default class MetricInput extends React.Component<FormElement> {
  render() {
    return (
      <label className={`${styles['field-group']} ${formStyles.validated}`} >
        {this.props.label}
        <input
          className={ this.props.error ?
            `${formStyles['error-field']} ${styles['input-shorter']}`
            : styles['input-shorter'] }
          type="number" min={0}
          ref={this.props.reference}
        />
        { this.props.error &&
          <div className={formStyles['error-message']} >
            {this.props.error}
          </div>
        }

      </label>
    );
  }
}
