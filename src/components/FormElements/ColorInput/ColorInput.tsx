import React from 'react';
import { FormElement } from '../types';

import styles from './ColorInput.module.css';

export default class ColorInput extends React.Component<FormElement> {
  render() {
    return (
      <label className={styles['color-group']}>
        <div className={styles['input-color-container']}>
          <input className={styles['input-color']} type="color" ref={this.props.reference} />
        </div>
        <div>{this.props.label}</div>
      </label>
    );
  }
}
