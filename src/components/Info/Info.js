import React, { Component } from 'react';
import Reviews from './Reviews'
import Form from './Form'


class Info extends Component {
    
    render() {
        return (
            <div>
                <img></img>
                
                <Reviews />
                <Form />
            </div>
        );
    }
}

export default Info;