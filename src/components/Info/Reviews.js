import React from 'react';
import { ListGroup, Container } from 'react-bootstrap';
import Item from './Item';
import './Reviews.css';
const url1 = 'https://flick-critic-db.herokuapp.com/api/movies/';
const url2 = 'https://flick-critic-db.herokuapp.com/api/reviews/';

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
		fetch(url1 + this.props.title)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				this.setState({ movie: res[0] });
			})
			.then(() => {
				this.state.movie.reviews.forEach((rev, index) => {
					if (rev) {
						fetch(url2 + rev)
							.then((res) => {
								return res.json();
							})
							.then((rev) => {
								this.setState({ reviewList: [...this.state.reviewList, rev] });
							});
					}
				});
			});
	}

	handleChange = (event) => {
		this.setState({ searchString: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.getData(this.state.searchString);
	};

	render() {
		let newRevs = this.state.reviewList.map((review, index) => {
			if (review) {
				return (
					<Item
						key={index}
						review={review.review}
						datePosted={review.datePosted}
						id={review._id}
						movieId={this.state.movie._id}
						movie={this.state.movie}
					/>
				);
			} else {
				return;
			}
		});

		if (!newRevs) {
			return null;
		}
		return (
			<Container id='reviews'>
				<h4 className='reviews-head'>Critic Reviews</h4>
				<ListGroup variant='flush'>{newRevs}</ListGroup>
			</Container>
		);
	}
}

export default Reviews;
