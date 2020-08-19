import React from 'react';
import { ListGroup, Container } from 'react-bootstrap';

import { Row, Col, Button } from 'react-bootstrap';
import Item from './Item';
import './Reviews.css';
const url1 = 'https://flick-critic-db.herokuapp.com/api/movies/';
const url2 = 'https://flick-critic-db.herokuapp.com/api/reviews/';
class Reviews extends React.Component {
	//constructor for user input from Form
	constructor(props) {
		super(props);
		this.state = {
			movie: '',
			reviewList: [],
			editClicked: true,
			error: false,
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
					fetch(url2 + rev)
						.then((res) => {
							return res.json();
						})
						.then((rev) => {
							this.setState({ reviewList: [...this.state.reviewList, rev] });
							console.log(rev);
						});
				});
			});
	}

	

	//find value in Form
	handleChange = (event) => {
		this.setState({ searchString: event.target.value });
	};

	//submit value in Form
	handleSubmit = (event) => {
		event.preventDefault();
		this.getData(this.state.searchString);
	};

	
	render() {
		let newRevs = this.state.reviewList.map((review, index) => {
			console.log(review);

			return <Item review={review.review} datePosted={review.datePosted} id={review._id}/>

			// return this.state.editClicked ? (
			// 	<ListGroup.Item id='reviews' key={index}>
			// 		"{review.review}" <br />
			// 		{Moment(review.datePosted).add(1, 'days').format('L')}{' '}
			// 		<span className='edit' onClick={this.handleEdit} key={index}>
			// 			edit
			// 		</span>
			// 	</ListGroup.Item>
			// ) : (
			// 	this.editForm()
			// );
			// return this.editForm();
		});
		console.log(newRevs);
		return (
			<Container id='reviews'>
				<ListGroup id='reviews' variant='flush'>
					{newRevs}
				</ListGroup>
			</Container>
		);
	}
}

export default Reviews;
