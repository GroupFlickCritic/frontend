import React from 'react';
import { Form as Input } from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

//form for review and submit button
const Form = ({ handleSubmit, handleChange, searchString }) => {
    return (
        <Input onSubmit={handleSubmit}>

            <Input.Group>
                <Input.Control
                    size='sm'
                    placeholder='Write your review here'
                    type='text'
                    name='searchString'
                    required
                    onChange={handleChange}
                    value={searchString}
                    rows="3"
                />
            </Input.Group>

            <Button type='submit' variant='dark' className='btn-sm'>
                Submit
			</Button>

        </Input>
    );
};

export default Form;