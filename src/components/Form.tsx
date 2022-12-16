import React from 'react';
import CheckboxGroup from './FormElements/CheckboxGroup';
import FileInput from './FormElements/FileInput';
import NameInput from './FormElements/NameInput';
import SelectInput from './FormElements/SelectInput';
import SwitchGroup from './FormElements/SwitchGroup';

export default class Form extends React.Component {
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

  validate = () => {
    let formIsValid = true;
    if (!this.nameInput.current?.value) {
      this.errorNameInput = 'gfdgf';
      formIsValid = false;
    }
    if (this.selectInput.current?.value === 'none') {
      this.errorSelectInput = '867697';
      formIsValid = false;
    }

    return formIsValid;
  }

	handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

    if(this.validate()){
      // submit
    } else {
      this.setState({ hasErrors: true });
    }


	};

	render() {
		return (
			<>
				<div className='creating-cards'>
					<div className='formContainer'>
						<form
							ref={this.formAll}
							className='character-form'
							onSubmit={this.handleSubmit}
						>
							<SwitchGroup
								label='Side Of The Force'
								reference={this.switchGroup}
							></SwitchGroup>

							<NameInput
								label='Name'
								reference={this.nameInput}
								error={this.errorNameInput}
							></NameInput>

							<CheckboxGroup
								label='Add Random Quote'
								reference={this.checkboxGroup}
							></CheckboxGroup>

              <SelectInput
                label='Species'
                reference={this.selectInput}
                error={this.errorSelectInput}
              ></SelectInput>

              <FileInput label='Image' reference={this.fileInput}></FileInput>

              <button className="button submit">
                Create
              </button>

						</form>
					</div>
				</div>
			</>
		);
	}
}
