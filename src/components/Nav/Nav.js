import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import About from "../About/About";
import Home from "../Home/Home";


class Nav extends Component {
    render() {
        return (
            <div>
                <nav>
                    <h1>FlickCritic</h1>
                    <Link to="/"> Home </Link>
                    <Route exact path="/"
                        component={Home}
                    />

                    <Link to="/about"> About </Link>
                    <Route exact path="/about"
                        component={About} />
                </nav>

            </div>
        );
    }
}

export default Nav;