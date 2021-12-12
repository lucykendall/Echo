import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import img from '../images/echo_logo.png'

export default function NavBar() {
    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/"><img src={img} alt="logo" className="img-fluid"/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/login">Play</Nav.Link>
        <NavDropdown title="Account" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/login">Login</NavDropdown.Item>
            <NavDropdown.Item href="/signup">SignUp</NavDropdown.Item>
            <NavDropdown.Item href="/account/update">My Account</NavDropdown.Item>
        </NavDropdown>
        </Nav>
        <Nav>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
            Dank memes
        </Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
    )
}