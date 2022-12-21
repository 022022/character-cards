import React from 'react';
import { FormElement } from '../types';

import styles from './SwitchGroup.module.css';

export default class SwitchGroup extends React.Component<FormElement> {
  render() {
    return (
      <div className={styles['switch-group']}>
        <label className={styles['character__switch-label']}>
          <input type="checkbox" ref={this.props.reference} />
          <span className={`${styles['character__switch-slider']} ${styles['switch-on']}`}></span>
        </label>
        <div>{this.props.label}</div>
      </div>
    );
  }
}
