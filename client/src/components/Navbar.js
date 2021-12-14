import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import img from '../images/echo_logo.png'

export default function NavBar() {
    return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#FA8164"}}>
    <Container className="d-flex align-items-center justify-content-center"
    style={{ maxWidth: "860px", maxHeigh: "200px" }}>
    <Navbar.Brand href="/"><img src={img} alt="logo" className="img-fluid" style={{ maxHeight: "200px" }}/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/play">Play</Nav.Link>
        <Nav.Link href="/signup">Signup</Nav.Link>
        <NavDropdown title="Portal" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/account/update">Account</NavDropdown.Item>
            <NavDropdown.Item href="/login">Login</NavDropdown.Item>
        </NavDropdown>
        </Nav>
        <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
    </Container>
    </Navbar>
    )
}