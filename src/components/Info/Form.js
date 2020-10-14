import React, { useState } from 'react';
import { Form as Input } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './Form.css';
import './Info.css';

import axios from 'axios';
let url = `https://flick-critic-db.herokuapp.com/api/reviews`;
function Form(props) {
	const [datePosted, setDatePosted] = useState('');
	const [review, setReview] = useState('');
	const [movie, setMovie] = useState(props.movie._id);

	const handleSubmit = (event) => {
		event.preventDefault();
		//pushing a new object of the new review and datePosted
		axios
			.post(`${url}/${movie}`, {
				review: review,
				datePosted: datePosted,
				movie: movie,
			})
			.then((res) => {
				props.fetchMovies()
				setReview('')
			});
	};

	const handleChange = (event) => {
		setReview(event.target.value);
		setDatePosted(new Date());
	};

	return (
		<Input onSubmit={handleSubmit} className='the-form'>
			<Input.Group className='form'>
				<Input.Control
					id='input'
					as='textarea'
					placeholder='Write your review here'
					type='text'
					name='searchString'
					required
					onChange={handleChange}
					value={review}
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

export default Form;
