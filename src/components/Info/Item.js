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
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		editClicked: true,
	// 		updatedReview: {
	// 			review: this.props.review,
	// 			datePosted: '',
	// 		},
	// 	};
	// }
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
		//pushing a new object of the new review and datePosted
		axios.put(`${url}${props.movieId}/${props.id}/${props.index}`, updatedReview).then((res) => {
			//page currently reloading; plans to refactor for App to manage state
			window.location.reload();
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
				//page currently reloading; plans to refactor for App to manage state
				window.location.reload();
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
								value={this.state.updatedReview.review}
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

		return this.state.editClicked ? (
			<ListGroup.Item className='reviews'>
				"{this.props.review}" <br />
				{Moment(this.props.datePosted).add(1, 'days').format('L')}{' '}
				<span className='edit' onClick={this.handleEdit}>
					edit
				</span>{' '}
				<span className='delete' onClick={this.handleDelete}>
					delete
				</span>
			</ListGroup.Item>
		) : (
			this.editForm()
		);
	
}

export default Item;
