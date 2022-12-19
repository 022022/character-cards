import React from 'react';
import CheckboxGroup from './../FormElements/CheckboxGroup/CheckboxGroup';
import FileInput from './../FormElements/FileInput/FileInput';
import MetricInput from './../FormElements/MetricInput/MetricInput';
import SelectInput from './../FormElements/SelectInput/SelectInput';
import SwitchGroup from './../FormElements/SwitchGroup/SwitchGroup';
import StringInput from './../FormElements/StringInput/StringInput';
import ColorInput from './../FormElements/ColorInput/ColorInput';
import { Errors } from '../../constants';
import { CreateForm } from './../FormElements/types';

import styles from './Form.module.css';

export default class Form extends React.Component<CreateForm> {
	formAll: React.RefObject<HTMLFormElement> = React.createRef();

	switchGroup: React.RefObject<HTMLInputElement> = React.createRef();
	nameInput: React.RefObject<HTMLInputElement> = React.createRef();
	checkboxGroup: React.RefObject<HTMLInputElement> = React.createRef();
	selectInput: React.RefObject<HTMLSelectElement> = React.createRef();
	fileInput: React.RefObject<HTMLInputElement> = React.createRef();
	heightInput: React.RefObject<HTMLInputElement> = React.createRef();
	hairColorInput: React.RefObject<HTMLInputElement> = React.createRef();
	eyesColorInput: React.RefObject<HTMLInputElement> = React.createRef();

  state = { hasErrors: false };

	errorNameInput = '';
	errorSelectInput = '';
  errorHeightInput = '';

  validate = () => {
    let formIsValid = true;
    if (!this.nameInput.current?.value) {
      this.errorNameInput = Errors.requiredName;
      formIsValid = false;
    }
    if (this.selectInput.current?.value === 'none') {
      this.errorSelectInput = Errors.requiredGeneric;
      formIsValid = false;
    }
    if (!this.heightInput.current?.value) {
      this.errorHeightInput = Errors.requiredHeight;
      formIsValid = false;
    }

    return formIsValid;
  }

	handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

    if(!this.validate()){
      this.setState({ hasErrors: true });

    } else {
      this.setState({ hasErrors: false });

      let image;
      if (this.fileInput.current?.files && this.fileInput.current?.files[0]) {
        image = this.fileInput.current?.files[0];
      }

      const newCard = {
        sideOfTheForce: this.switchGroup.current?.checked || false,
        name: this.nameInput.current?.value || 'No name',
        addQuote: this.checkboxGroup.current?.checked || false,
        species: this.selectInput.current?.value || 'Unknown',
        imageUploaded: image || null,
        height: this.heightInput.current?.value || 'Unknown',
        hairColor: this.hairColorInput.current?.value || '',
        eyesColor: this.eyesColorInput.current?.value  || '',
      };

      this.props.addToCardList(newCard);
    }


	};

	render() {
		return (
			<>
				<div className='creating-cards'>

						<form
							ref={this.formAll}
							className={styles.characterForm}
							onSubmit={this.handleSubmit}
						>
							<SwitchGroup
								label='Side Of The Force'
								reference={this.switchGroup}
							></SwitchGroup>

							<StringInput
								label='Name'
								reference={this.nameInput}
								error={this.errorNameInput}
							></StringInput>

              <SelectInput
                label='Species'
                reference={this.selectInput}
                error={this.errorSelectInput}
              ></SelectInput>

              <FileInput label='Image' reference={this.fileInput}></FileInput>

							<CheckboxGroup
								label='Add Random Quote'
								reference={this.checkboxGroup}
							></CheckboxGroup>

              <MetricInput
								label='Height (m)'
								reference={this.heightInput}
                error={this.errorHeightInput}
							></MetricInput>

              <div className={styles.colors}>
                <ColorInput
                  label="Hair color"
                  reference={this.hairColorInput}
                ></ColorInput>
                <ColorInput
                  label="Eyes color"
                  reference={this.eyesColorInput}
                ></ColorInput>
              </div>

              <button className={styles.submit}>
                Create
              </button>

						</form>

				</div>
			</>
		);
	}
}
