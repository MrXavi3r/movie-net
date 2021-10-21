import React from 'react';
import Nav from 'react-bootstrap/Nav'

export default function Navbar() {
    return (
        <Nav className="bg-danger mb-3">
            <Nav.Link href="/" className="text-white ml-5">Movie Finder</Nav.Link>
        </Nav>
    )
}
