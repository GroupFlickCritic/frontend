import React, { Component } from 'react';

import Navbar from "react-bootstrap/Navbar"
import { Nav as ReactNav } from "react-bootstrap"



class Nav extends Component {
    render() {
        return (

            <Navbar bg="light" expand="sm">
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <ReactNav className="mr-auto">
                        <ReactNav.Link href="/">Home</ReactNav.Link>
                        <ReactNav.Link href="/about">About</ReactNav.Link>

                    </ReactNav>

                </Navbar.Collapse>
            </Navbar>


        );
    }
}

export default Nav;