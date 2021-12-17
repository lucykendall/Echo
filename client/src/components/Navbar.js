import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import img from '../images/echo_logo.png'

export default function NavBar() {
    return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#FA8164", borderRadius: "20px", marginTop:"5vh"}}>
    <Container className="d-flex align-items-center justify-content-center"
    style={{ maxWidth: "700px", maxHeight: "200px" }}>
    <Navbar.Brand href="/"><img src={img} alt="logo" className="img-fluid" style={{ width: "100px" }}/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href="/play" style={{ color: "#ffff"}}>Play</Nav.Link>
        <Nav.Link href="/signup" style={{ color: "#ffff"}}>Signup</Nav.Link>
        <Nav.Link href="/login" style={{ color: "#ffff"}}>Login</Nav.Link>
        <Nav.Link href="/account/update" style={{ color: "#ffff"}}>Account</Nav.Link>
        </Nav>
        <Form className="d-flex">
      </Form>
    </Navbar.Collapse>
    </Container>
    </Navbar>
    )
}