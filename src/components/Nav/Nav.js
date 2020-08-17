import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar"



class Nav extends Component {
    render() {
        return (

            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>


        );
    }
}

export default Nav;