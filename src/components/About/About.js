import React from 'react';
import { Accordion, Card, Jumbotron, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

function About() {
	const members = [
		{
			name: 'Jason Choi',
			githubLink: 'https://github.com/jasonbchoi',
			linkedInLink: 'https://www.linkedin.com/in/jasonbchoi',
		},
		{
			name: 'Alisha Lawani',
			githubLink: 'https://github.com/alishalawani',
			linkedInLink: 'https://www.linkedin.com/in/alishalawani/',
		},
		{
			name: 'David Sams',
			githubLink: 'https://github.com/davidedsams',
			linkedInLink: 'https://www.linkedin.com/in/davidedwardsams',
		},
		{
			name: 'Roshonia Brooks',
			githubLink: 'https://github.com/RoshoniaB',
			linkedInLink: 'https://www.linkedin.com/in/roshonia-brooks',
		}
	]
	return (
		<Jumbotron className='about'>
			<h1>MEET OUR TEAM</h1>
			<p className='aboutBody'>
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
						<Accordion.Toggle variant='link' eventKey='0' className='contactUs'>
							CONTACT US
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey='0'>
						<Card.Body className='body'>
							<Image
								fluid
								src='/images/groupPic.png'
								alt='GroupPic'
								className='body'
							/>
							<h6>(clockwise order)</h6>
							{members.map((member, index) => {
								return (
									<div className='groupInfo' key={index}>
										<h3>{member.name}</h3>
										<a
											href={member.githubLink}
											rel='noopener noreferrer'
											target='_blank'>
											<Image className='github' src='images/github.png' />
										</a>
										<a
											href={member.linkedInLink}
											rel='noopener noreferrer'
											target='_blank'>
											<Image className='linkedin' src='images/linkedin.jpg' />
										</a>
									</div>
								);
							})}
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</Jumbotron>
	);
}

export default About;
