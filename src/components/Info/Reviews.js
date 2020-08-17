import React from 'react';
import Form from './Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
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
    getData(searchString) {
        if (searchString) {
            const url = `${this.props.searchOptions.url}/collection?key=${this.props.searchOptions.key}&q=${this.state.searchString}&ps=50`;
            fetch(url)
                .then((res) => res.json())
                .then((res) => {
                    console.log(res.artObjects);
                    this.setState({
                        error: false,
                        reviewList: res.artObjects,
                        setSearch: true,
                        searchString: '',
                        lastSearch: this.state.searchString,
                    });
                })
                .then((res) => {
                    if (!this.state.reviewList.length) {
                        this.setState({ error: true });
                    }
                })
                .catch((err) => {
                    console.error(err);
                    this.setState({ error: true });
                });
        }
    }

    render() {
        return (
            <Container>
                <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                </ListGroup>
            </Container>
        );
    }
}

export default Reviews;