import React, { Component } from 'react';
import Reviews from './Reviews'
import Form from './Form'
import { Image, Container } from 'react-bootstrap';
import axios from 'axios';
import './Info.css'


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
						<div className="movieInfo">
							<h3 id="movieTitle">{movie.title}</h3>
							<h6 className="detail">Summary:</h6>
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
								<span className='detail'>Rated:</span> {movie.movieInfo.rated}{' '}
							</p>
							<p>
								<span className='detail'>Release Date:</span>{' '}
								{movie.movieInfo.releaseDate}{' '}
							</p>
						</div>

						<Form
							title={movie.title}
							setNewMovies={this.props.setNewMovies}
							movie={movie}
						/>
						<Reviews title={movie.title} movie={movie} />
					</div>
				);
				console.log(movie);
				this.setState({ movieInfo: display });
			});
	}
	render() {
		return (
			<Container className='info'>

				{this.state.movieInfo}
			</Container>
		);
	}
}

export default Info;
