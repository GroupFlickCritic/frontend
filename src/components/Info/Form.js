import React from 'react';
import { Form as Input } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
//form for review and submit button
const Form = ({ handleSubmit, handleChange, searchString }) => {
    return (
        <Input onSubmit={handleSubmit}>
            <Row>
				<Col>
            <Input.Group>
                <Input.Control
                    size='sm'
                    placeholder='Write your review here'
                    type='text'
                    name='searchString'
                    required
                    onChange={handleChange}
                    value={searchString}
                    rows="1"
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
};

export default Form;