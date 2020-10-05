import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Searchbar extends Component {
    render() {
        return (
            <Form onSubmit={this.props.handleSubmit} inline className="d-flex justify-content-center">
                <Form.Group>
                <Form.Control type="text" placeholder="search movies..." onChange={this.props.handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">Search</Button>
            </Form>
        )
    }
}

export default Searchbar
