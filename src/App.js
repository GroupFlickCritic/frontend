import React, { Component } from 'react';
import Nav from './components/Nav/Nav'
import About from './components/About/About'

import Info from './components/Info/Info'
import Home from './components/Home/Home'
import {Route} from 'react-router-dom'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
      movies: [],
    };
	}

	componentDidMount() {
		const url = `https://flick-critic-db.herokuapp.com/api/movies`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
        console.log(res);
        this.setState({movies: [...res]});
			});
  }
  
	render() {
		return (
			<div>
				<Nav />
				<Route
					path='/info/:movie'
					render={(routerProps) => {
						return (
							<Info match={routerProps.match} movies={this.state.movies} />
						);
					}}
				/>
				<Home exact movies={this.state.movies} />
			</div>
		);
	}
}

export default App;