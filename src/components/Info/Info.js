import React, {useState, useEffect } from 'react';
import Reviews from './Reviews';
import Form from './Form';
import { Image, Container } from 'react-bootstrap';
import axios from 'axios';
import './Info.css';

let url = `https://flick-critic-db.herokuapp.com/api/movies/`;
function Info(props) {
	const [movieInfoState, setMovieInfoState] = useState(null);

	useEffect(() => {
		axios(url + props.match.params.movie)
			.then((res) => res.data[0])
			.then((movie) => {
				let movieInfo = movie.movieInfo
				let {
					summary,
					director,
					writers,
					genres,
					rated,
					releaseDate,
				} = movieInfo
				let display = (
					<div id='allInfo'>
						<div className='top-contents'>
							<Image src={movie.infoImage} alt={movie.title} id='infoImage' />
							<div className='movieInfo'>
								<h3 className='detail' id='movieTitle'>
									{movie.title}
								</h3>
								<h6 className='detail'>Summary:</h6>
								<span>{summary}</span><br />
								<span className='detail'>Director:</span>{' '}
								{director}<br />
								<span className='detail'>Writers:</span>{' '}
								{writers}<br />
								<span className='detail'>Genres:</span>{' '}
								{genres}<br />
								<span className='detail'>Rated:</span>{' '}
								{rated}<br />
								<span className='detail'>Release Date:</span>{' '}
								{releaseDate}<br />
							</div>
						</div>
						<div className='bottom-contents'>
							<Reviews title={movie.title} movie={movie} />
							<div className='new-review'>
								<Form
									title={movie.title}
									setNewMovies={props.setNewMovies}
									movie={movie}
								/>
							</div>
						</div>
					</div>
				);
				setMovieInfoState(display);
			});
	}, [props.match.params.movie, props.setNewMovies])

	return <Container className='info-container'>{movieInfoState}</Container>;
}

export default Info;
