import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Home extends Component {
	constructor() {
		super();
		this.state = {
			posters: [],
		};
	}
	componentDidMount() {
		const url = `https://flick-critic-db.herokuapp.com/api/movies`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
			});
	}

	render() {
		return (
			<div>
				<main>
					{this.state.posters.map((poster) => {
						return (
							<Link to={'/info:'}>
								<img src=' ' />
							</Link>
						);
					})}
				</main>
			</div>
		);
	}
}

export default Home;
