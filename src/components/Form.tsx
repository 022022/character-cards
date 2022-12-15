import React from 'react';
import CheckboxGroup from './FormElements/CheckboxGroup';

export default class Form extends React.Component {
  formAll: React.RefObject<HTMLFormElement> = React.createRef();
	checkbox: React.RefObject<HTMLInputElement> = React.createRef();

	handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
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
							<CheckboxGroup
								label='Add Random Quote'
								reference={this.checkbox}
							></CheckboxGroup>
						</form>
					</div>
				</div>
			</>
		);
	}
}
