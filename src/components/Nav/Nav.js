import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Nav extends Component {
    render() {
        return (

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/'>
                    <a class="navbar-brand" href="#">FlickCritic</a>
                </Link>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to='/'>
                            <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                        </Link>

                        <Link to='/about'>
                            <a class="nav-item nav-link" href="#">About</a>
                        </Link>


                    </div>
                </div>

            </nav>


        );
    }
}

export default Nav;