import React from 'react';
import { Accordion, Card, Jumbotron, CardImg } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

function About() {
	function handleOnClick(e) {
		e.preventDefault();
	}

	return (
		<Jumbotron className='about'>
			<h1>MEET OUR TEAM</h1>
			<p>
				We all are very different. We come from different backgrounds. We were
				born in different cities, at a different time. We have different
				hobbies, and interests. Although we may be different, what connects us
				all is "flickcritic.". The countless hours spent was all worth it to
				make our dreams a reality. Thank you from all of us for visiting our
				app. We hope you enjoyed it as much as we enjoyed making "flickcritic.".
			</p>

			<Accordion defaultActiveKey='1'>
				<Card className='card'>
					<Card.Header className='header'>
						<Accordion.Toggle
							onClick={handleOnClick}
							variant='link'
							eventKey='0'
							className='contactUs'>
							CONTACT US
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey='0'>
						<Card.Body className='body'>
							<CardImg fluid src='/images/groupPic.png' alt='GroupPic' />
							<h6>(clockwise order)</h6>
							<div className='groupInfo'>
								<h3>Jason Choi</h3>
								<a
									href='https://github.com/Choiboi500'
									rel='noopener noreferrer'
									target='_blank'>
									<CardImg className='github' src='images/github.png' />
								</a>
								<a
									href='https://www.linkedin.com/in/jason-choi-347855b4/'
									rel='noopener noreferrer'
									target='_blank'>
									<CardImg className='linkedin' src='images/linkedin.jpg' />
								</a>
							</div>
							<div class='groupInfo'>
								<h3>Alisha Lawani</h3>
								<a
									href='https://github.com/alishalawani'
									rel='noopener noreferrer'
									target='_blank'>
									<CardImg className='github' src='images/github.png' />
								</a>
								<a
									href='https://www.linkedin.com/in/alishalawani/'
									rel='noopener noreferrer'
									target='_blank'>
									<CardImg className='linkedin' src='images/linkedin.jpg' />
								</a>
							</div>
							<div class='groupInfo'>
								<h3>David Sams</h3>
								<a
									href='https://github.com/davidedsams'
									rel='noopener noreferrer'
									target='_blank'>
									<CardImg className='github' src='images/github.png' />
								</a>
								<a
									href='https://www.linkedin.com/in/davidedwardsams'
									rel='noopener noreferrer'
									target='_blank'>
									<CardImg className='linkedin' src='images/linkedin.jpg' />
								</a>
							</div>
							<div class='groupInfo'>
								<h3>Roshonia Brooks</h3>
								<a
									href='https://github.com/RoshoniaB'
									rel='noopener noreferrer'
									target='_blank'>
									<CardImg className='github' src='images/github.png' />
								</a>
								<a
									href='https://www.linkedin.com/in/roshonia-brooks'
									rel='noopener noreferrer'
									target='_blank'>
									<CardImg className='linkedin' src='images/linkedin.jpg' />
								</a>
							</div>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</Jumbotron>
	);
}

export default About;
