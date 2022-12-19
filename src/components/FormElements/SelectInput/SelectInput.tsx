import React from 'react';
import { FormSelectElement } from './../types';

import styles from './SelectInput.module.css';
import formStyles from './../../Form/Form.module.css';

export default class SelectInput extends React.Component<FormSelectElement> {
  render() {
    return (
      <label className={`${formStyles['field-group']} ${formStyles.validated}`}>
        {this.props.label}
        <select className={styles['select-field']} defaultValue={'none'} ref={this.props.reference}>
          <option value="none"> </option>
          <option value="human">Human</option>
          <option value="wookie">Wookie</option>
          <option value="gungan">Gungan</option>
          <option value="zabrak">Zabrak</option>
          <option value="rodian">Rodian</option>
          <option value="ewok">Ewok</option>
          <option value="jawa">Jawa</option>
          <option value="tusken">Tusken</option>
          <option value="secret">Rather not say</option>
        </select>
        { this.props.error &&
          <div className="error-message" >
            {this.props.error}
          </div>
        }

      </label>
    );
  }
}
