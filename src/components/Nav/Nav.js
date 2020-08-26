import React, { Component } from 'react';
import './Nav.css';

import { Nav as ReactNav, Navbar } from 'react-bootstrap';

class Nav extends Component {
	render() {
		return (
			<Navbar className='navbar' expand='sm'>
				<Navbar.Brand id='title' href='/'>
					flickcritic.
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<ReactNav className='mr-auto'>
						<ReactNav.Link id='link' href='/'>
							Home
						</ReactNav.Link>
						<ReactNav.Link id='link' href='/about'>
							About
						</ReactNav.Link>
					</ReactNav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Nav;
