import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Play() {
    return (
        <Container className="d-flex align-items-center justify-content-center">
            <div className="w-100" style={{ maxWidth: "860px", maxHeight: "860px", border: "2px solid", margin: "40px auto" }}>
                <h1 className="header">Memory Game!</h1>
                <Row>
                    <Col>1 of 16</Col>
                    <Col>2 of 16</Col>
                    <Col>3 of 16</Col>
                    <Col>4 of 16</Col>
                </Row>
                <Row>
                    <Col>1 of 16</Col>
                    <Col>2 of 16</Col>
                    <Col>3 of 16</Col>
                    <Col>4 of 16</Col>
                </Row>
                <Row>
                    <Col>1 of 16</Col>
                    <Col>2 of 16</Col>
                    <Col>3 of 16</Col>
                    <Col>4 of 16</Col>
                </Row>
                <Row>
                    <Col>1 of 16</Col>
                    <Col>2 of 16</Col>
                    <Col>3 of 16</Col>
                    <Col>4 of 16</Col>
                </Row>
                <Button style={{ backgroundColor: "#FB6245", color: "#fff" }} variant="outline-primary">New Game</Button>{' '}
            </div>
        </Container>
    )
}
