import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Moment from 'moment';

const url1 = 'https://flick-critic-db.herokuapp.com/api/movies/';
class Reviews extends React.Component {
    //constructor for user input from Form
    constructor(props) {
        super(props);
        this.state = {
            searchString: '',
            lastSearch: '',
            reviewList: '',
            setSearch: false,
            error: false,
        };
    }
    componentDidMount(){
        fetch(url1+ this.props.title).then((res)=>{
            return res.json()
        }).then((res)=>{
            console.log(res[0])
            let list = res[0].reviews.map((rev, index)=>{
            return (
							<ListGroup.Item key={index}>
								"{rev.review}" <br/> 
                    {Moment(rev.datePosted).add(10, 'days').calendar()}
                                
                                
							</ListGroup.Item>
						);
            });
            this.setState({ reviewList: list });
        })
    }

    //find value in Form
    handleChange = (event) => {
        this.setState({ searchString: event.target.value });
    };

    //submit value in Form
    handleSubmit = (event) => {
        event.preventDefault();
        this.getData(this.state.searchString);
    };

    //fetch reviews and add searchString
    // getData(searchString) {
    //     if (searchString) {
    //         const url = 'https://flick-critic-db.herokuapp.com/api/movies';
    //         fetch(url)
    //             .then((res) => res.json())
    //             .then((res) => {
    //                 console.log(res.artObjects);
    //                 this.setState({
    //                     error: false,
    //                     reviewList: res.artObjects,
    //                     setSearch: true,
    //                     searchString: '',
    //                     lastSearch: this.state.searchString,
    //                 });
    //             })
    //             .then((res) => {
    //                 if (!this.state.reviewList.length) {
    //                     this.setState({ error: true });
    //                 }
    //             })
    //             .catch((err) => {
    //                 console.error(err);
    //                 this.setState({ error: true });
    //             });
    //     }
    // }

    render() {
        return (
            <Container>
                
                <ListGroup variant="flush">
                   {this.state.reviewList}
                </ListGroup>
            </Container>
        );
    }
}

export default Reviews;