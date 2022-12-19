import React from 'react';
import { FormElement } from '../types';

import styles from './CheckboxGroup.module.css';

export default class CheckboxGroup extends React.Component<FormElement> {
  render() {
    return (
      <label className={styles['checkbox-group']}>
        <input className={styles.checkbox} type="checkbox" ref={this.props.reference} />
        <div >{this.props.label}</div>
      </label>
    );
  }
}