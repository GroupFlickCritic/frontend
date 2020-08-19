import React from 'react';
import { ListGroup, Container } from 'react-bootstrap';
import Moment from 'moment';
import './Reviews.css';

const url1 = 'https://flick-critic-db.herokuapp.com/api/movies/';
const url2 = 'https://flick-critic-db.herokuapp.com/api/reviews/';
class Reviews extends React.Component {
	//constructor for user input from Form
	constructor(props) {
		super(props);
		this.state = {
			searchString: '',
			lastSearch: '',
			reviewList: '',
			setSearch: false,
			error: false,
		};
	}
	componentDidMount() {
		fetch(url1 + this.props.title)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				console.log(res[0]);
				let list = res[0].reviews.map((rev, index) => {
					fetch(url2 + rev).then((rev) => {
						return (
							<ListGroup.Item id='reviews' key={index}>
								"{rev.review}" <br />
								{Moment(rev.datePosted).add(10, 'days').calendar()}
							</ListGroup.Item>
						);
					});
				});
				this.setState({ reviewList: list });
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
		return (
			<Container id='reviews'>
				<ListGroup id='reviews' variant='flush'>
					{this.state.reviewList}
				</ListGroup>
			</Container>
		);
	}
}

export default Reviews;
