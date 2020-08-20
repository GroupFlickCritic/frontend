import React from 'react';
import { Form as Input } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import './Info.css'

import axios from 'axios';
let url = `https://flick-critic-db.herokuapp.com/api/reviews/`;
let url2 = 'https://flick-critic-db.herokuapp.com/api/movies/';
class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            datePosted: '',
            review: ''
        }
    }


    handleSubmit = (event) => {
        event.preventDefault()
        //pushing a new object of the new review and datePosted
        axios.post(url, this.state).then((res)=>{
        return res.data;
        }).then((review)=>{
            axios.put(`${url2}/${this.props.movie._id}/${review._id}`).then((res)=>{
                window.location.reload();
            })
			
		})
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
                                onChange={this.handleChange}
                                value={this.state.review}
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