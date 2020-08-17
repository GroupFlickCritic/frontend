import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns';
import Container from 'react-bootstrap/Container';
class Home extends Component {
	
	render() {
		let movies = this.props.movies.map((movie, index) => {
			return (
				//we want the keys to be unique
				<Link to={`/info:${movie.title}`} key={index + movie.title}>
					<Card>
						<Card.Img
							variant='top'
							src={movie.mainImage}
							alt={movie.title}
							className='info'
						/>
					</Card>
				</Link>
			);
		});
		return (
			<Container>
				<CardColumns>{movies}</CardColumns>
			</Container>
		);
	}
}

export default Home;
