import React from 'react';
import { Form as Input } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './Form.css';
import './Info.css';

import axios from 'axios';
let url = `https://flick-critic-db.herokuapp.com/api/reviews`;
class Form extends React.Component {
	constructor() {
		super();
		this.state = {
			datePosted: '',
			review: '',
			movie: this.props.movie._id,
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		//pushing a new object of the new review and datePosted
		axios.post(`${url}/${this.props.movie._id}`, this.state).then((res) => {
			window.location.reload();
		});
	};

	handleChange = (event) =>
		this.setState({
			review: event.target.value,
			datePosted: new Date(),
		});

	render() {
		return (
			<Input onSubmit={this.handleSubmit} id='form'>
				<Input.Group className='form'>
					<Input.Control
						id='input'
						as='textarea'
						placeholder='Write your review here'
						type='text'
						name='searchString'
						required
						onChange={this.handleChange}
						value={this.state.review}
						rows='5'
					/>
					<Button
						type='submit'
						variant='dark'
						className='btn-sm'
						id='submit-button'>
						Submit
					</Button>
				</Input.Group>
			</Input>
		);
	}
}

export default Form;
