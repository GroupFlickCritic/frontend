import React, { Component,useState } from 'react';
import { ListGroup, Button, Row, Col } from 'react-bootstrap';
import Moment from 'moment';
import { Form as Input } from 'react-bootstrap';
import './Item.css';
import axios from 'axios';
let url = 'https://flick-critic-db.herokuapp.com/api/reviews/';
let url2 = 'https://flick-critic-db.herokuapp.com/api/movies/';

function Item(props){
	const [editClick, setEditClick] = useState(true)
	const [updatedReview, setUpdatedReview] = useState({
		review: props.review,
		datePosted: ''
	})
	
	const handleEdit = (event) => {
		event.preventDefault();
		setEditClick(false);
	};

	const handleChange = (event) => {
		event.preventDefault();
		setUpdatedReview({
				review: `${event.target.value}`,
				datePosted: new Date(),
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setEditClick(true)
		axios.put(`${url}${props.movieId}/${props.id}/${props.index}`, updatedReview).then((res) => {
			props.fetchReviews()
		});
	};

	const handleDelete = (event) => {
		event.preventDefault();
		let newMovie = props.movie;
		const index = newMovie.reviews.indexOf(props.id);
		if (index > -1) {
			newMovie.reviews.splice(index, 1);
		}
		axios
			.delete(`${url2}${props.movieId}/${props.index}/${props.id}`, newMovie)
			.then(() => {
				props.fetchReviews()
			});
	};

	const editForm = () => {
		return (
			<Input onSubmit={handleSubmit}>
				<Row>
					<Col>
						<Input.Group>
							<Input.Control
								size='md'
								id='edit-box'
								as='textarea'
								type='text'
								name='searchString'
								required
								onChange={handleChange}
								value={updatedReview.review}
								rows='1'
							/>
						</Input.Group>
					</Col>
					<Col>
						<Button type='submit' variant='dark' className='btn-sm'>
							Submit
						</Button>
					</Col>
				</Row>
			</Input>
		);
	};

		return editClick ? (
			<ListGroup.Item className='reviews'>
				"{props.review}" <br />
				{Moment(props.datePosted).add(1, 'days').format('L')}{' '}
				<span className='edit' onClick={handleEdit}>
					edit
				</span>{' '}
				<span className='delete' onClick={handleDelete}>
					delete
				</span>
			</ListGroup.Item>
		) : (
			editForm()
		);
	
}

export default Item;
