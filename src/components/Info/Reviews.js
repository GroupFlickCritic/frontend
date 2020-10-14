import React, { useState, useEffect } from 'react';
import { ListGroup, Container } from 'react-bootstrap';
import Item from './Item';
import './Reviews.css';
import axios from 'axios';

function Reviews({ title, movie, fetchMovies }) {
	const [reviewList, setReviewList] = useState([]);
	const [editClicked, setEditClicked] = useState(true);

	useEffect(fetchMovies, []);

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
					fetchMovies={fetchMovies}
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
