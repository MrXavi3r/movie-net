import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

type SearchbarProps = {
    handleSubmit(e: React.SyntheticEvent): void
    handleChange(e: React.ChangeEvent<HTMLInputElement>): void
}

const Searchbar: React.FC<SearchbarProps> = ({handleSubmit, handleChange}) => {
        return (
            <Form onSubmit={handleSubmit} inline className="d-flex justify-content-center">
                <Form.Group>
                <Form.Control type="text" placeholder="search movies..." onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">Search</Button>
            </Form>
        )
}

export default Searchbar
