import React from 'react';
import { FormElement } from './../types';

import styles from './FileInput.module.css';
import formStyles from './../../Form/Form.module.css';


export default class FileInput extends React.Component<FormElement> {
  render() {
    return (
      <label className={formStyles['field-group']}>
        <input
          type="file"
          className={styles['file-selector']}
          ref={this.props.reference}
        />
      </label>
    );
  }
}
