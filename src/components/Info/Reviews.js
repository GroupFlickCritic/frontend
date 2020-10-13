import React, { useState, useEffect } from 'react';
import { ListGroup, Container } from 'react-bootstrap';
import Item from './Item';
import './Reviews.css';
import axios from 'axios';
const url1 = 'https://flick-critic-db.herokuapp.com/api/movies/';

function Reviews(props) {
	const [movie, setMovie] = useState('');
	const [reviewList, setReviewList] = useState([]);
	const [editClicked, setEditClicked] = useState(true);
	function fetchReviews() {
		axios(url1 + props.title)
			.then((res) => {
				return res.data;
			})
			.then((res) => {
				setMovie(res[0]);
			});
	}

	useEffect(fetchReviews
	,[]);

	let newRevs = '';
	if (movie) {
		newRevs = movie.reviews.map((review, index) => {
			return review ? (
				<Item
					key={index}
					review={review.review}
					datePosted={review.datePosted}
					id={review._id}
					index={index}
					movieId={movie._id}
					movie={movie}
					fetchReviews={fetchReviews}
				/>
			) : undefined;
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

export default Reviews;
