import React from 'react';
import { Accordion, Card, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function About() {
	function handleOnClick(e) {
		e.preventDefault()
	}

	return (
		<Jumbotron className='About'>
			<h1>MEET OUR TEAM</h1>
			<p>
				We all are very different. We come from different backgrounds. We were
				born in different cities, at a different time. We have different
				hobbies, and interest. Although we may be different what connects us all
				is flickcritic. The countless hours spent was all worth it to make our
				dreams a reality. Thank you from all of us for visiting our app. We hope
				you enjoyed it as much as we enjoyed making flickcritic.
  </p>
			
		



		<Accordion defaultActiveKey='1'>
			<Card>
				<Card.Header>
					<Accordion.Toggle
						onClick={handleOnClick}
						className='panel-toggle'
						variant='link'
						eventKey='0'>
						CONTACT US
						</Accordion.Toggle>
				</Card.Header>
				<Accordion.Collapse eventKey='0'>
					<Card.Body>our contact info</Card.Body>
				</Accordion.Collapse>
			</Card>
		</Accordion>
		</Jumbotron>
	);
}

export default About;
