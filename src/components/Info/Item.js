import React, { Component } from 'react';
import { ListGroup, Button, Row, Col } from 'react-bootstrap';
import Moment from 'moment';
import { Form as Input } from 'react-bootstrap';
import './Item.css';
import axios from 'axios';
let url = 'https://flick-critic-db.herokuapp.com/api/movies/';

class Item extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editClicked: true,
			updatedReview: {
				review: this.props.review,
				datePosted: '',
			},
		};
	}
	handleEdit = (event) => {
		event.preventDefault();
		this.setState({ editClicked: false });
	};

	handleChange = (event) => {
		event.preventDefault();
		this.setState({
			updatedReview: {
				review: `${event.target.value}`,
				datePosted: new Date(),
			},
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		//pushing a new object of the new review and datePosted
		axios.put(url + this.props.id, this.state.updatedReview).then((res) => {
			//page currently reloading; plans to refactor for App to manage state
			window.location.reload();
		});
	};

	handleDelete = (event) => {
		event.preventDefault();
		let newMovie = this.props.movie;
		const index = newMovie.reviews.indexOf(this.props.id);
		if (index > -1) {
			newMovie.reviews.splice(index, 1);
		}
		axios
			.delete(`${url}${this.props.movieId}/${this.props.index}/${this.props.id}`, newMovie)
			.then(() => {
				//page currently reloading; plans to refactor for App to manage state
				window.location.reload();
			});
	};

	editForm = () => {
		return (
			<Input onSubmit={this.handleSubmit}>
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
								onChange={this.handleChange}
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

	render() {
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
}

export default Item;
