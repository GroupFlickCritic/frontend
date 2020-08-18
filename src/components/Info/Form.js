import React from 'react';
import { Form as Input } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
//form for review and submit button

import axios from 'axios';
let url = `https://flick-critic-db.herokuapp.com/api/movies/`;
class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            datePosted: '',
            review: ''
        }
    }


    handleSubmit = (event) => {
        // event.preventDefault()
        let newMovie = this.props.movie;
        //pushing a new object of the new review and datePosted
        /**
         * { review: theInputedReview, datePosted: Date.now()}
         */
        newMovie.reviews.push(this.state);
        axios.put(url + this.props.title, newMovie).then((res)=>{
            return res.data
        }
        )
    }

    handleChange = (event) => this.setState({
        review: event.target.value,
        datePosted: new Date()
    })



    render() {
        return (
            <Input onSubmit={this.handleSubmit}>
                <Row>
                    <Col>
                        <Input.Group>
                            <Input.Control
                                size='sm'
                                placeholder='Write your review here'
                                type='text'
                                name='searchString'
                                required
                                // onChange={handleChange}
                                value={this.state.newReview.review}
                                rows='1'
                            />
                        </Input.Group>
                    </Col>
                    <Col>
                        <Button type='submit' variant='dark' className='btn-sm'>
                            Submit
									</Button>
                    </Col>
                </Row>
            </Input>
        );
    }

}

export default Form;