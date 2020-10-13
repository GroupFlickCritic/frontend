import React, {useState} from 'react';
import { ListGroup, Container } from 'react-bootstrap';
import Item from './Item';
import './Reviews.css';
import axios from 'axios';
const url1 = 'https://flick-critic-db.herokuapp.com/api/movies/';

class Reviews extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movie: '',
			reviewList: [],
			editClicked: true,
		};
	}
	componentDidMount() {
		axios(url1 + this.props.title)
			.then((res) => {
				return res.data;
			})
			.then((res) => {
				this.setState({ movie: res[0] });
			 })
			
	}

	handleChange = (event) => {
		this.setState({ searchString: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.getData(this.state.searchString);
	};

	render() {
		let newRevs = ''
		if(this.state.movie){

		newRevs = this.state.movie.reviews.map((review, index) => {
				return review ? (
					<Item
						key={index}
						review={review.review}
						datePosted={review.datePosted}
						id={review._id}
						index={index}
						movieId={this.state.movie._id}
						movie={this.state.movie}
					/>
				) : undefined
		});
	}

		if (!newRevs) {
			return null;
		}
		return (
			<Container className='reviews'>
				<h4 className='reviews-head'>Critic Reviews</h4>
				<ListGroup variant='flush'>{newRevs}</ListGroup>
			</Container>
		);
	}
}

export default Reviews;
