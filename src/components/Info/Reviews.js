import React from 'react';
import Form from './Form';
import ListGroup from 'react-bootstrap/ListGroup';
class Reviews extends React.Component {
    //constructor for user input from Form
    constructor(props) {
        super(props);
        this.state = {
            searchString: '',
            lastSearch: '',
            galleryImages: '',
            setSearch: false,
            error: false,
        };
    }
    //find value in Form
    handleChange = (event) => {
        this.setState({ searchString: event.target.value });
    };

    render() {
        return (
            <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            </ListGroup>
        );
    }
}

export default Reviews;