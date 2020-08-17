import React, { Component } from 'react';
import Reviews from './Reviews'
import Form from './Form'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import axios from 'axios';
let url = `https://flick-critic-db.herokuapp.com/api/movies/`;
class Info extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movieInfo: null,
		};
	}
	componentDidMount() {
		axios(url + this.props.match.params.movie)
			.then((res) => res.data[0])
			.then((movie) => {
				let display = (
					<div>
						<Image fluid src={movie.infoImage} alt={movie.title} />
						<h3>{movie.title}</h3>
						<h6>Summary</h6>
						<p>{movie.movieInfo.summary}</p>
						<p>
							<span className='detail'>Director:</span>{' '}
							{movie.movieInfo.director}{' '}
						</p>
						<p>
							<span className='detail'>Writers:</span> {movie.movieInfo.writers}{' '}
						</p>
						<p>
							<span className='detail'>Genres:</span> {movie.movieInfo.genres}{' '}
						</p>
						<p>
							<span className='detail'>Rated </span> {movie.movieInfo.rated}{' '}
						</p>
						<p>
							<span className='detail'>Release Date:</span> {movie.movieInfo.releaseDate}{' '}
						</p>
                        <Form title={movie.title}/>
                        <Reviews title={movie.title}/>
					</div>
				);
				console.log(movie);
				this.setState({ movieInfo: display });
			});
	}
	render() {
		return (
			<Container>
				
				{this.state.movieInfo}
			</Container>
		);
	}
}

export default Info;
