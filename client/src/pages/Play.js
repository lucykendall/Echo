import React from 'react'
import { Container } from 'react-bootstrap';
import Board from '../components/game/Board';

export default function Play() { 

    return (
        <Container className="d-flex align-items-center justify-content-center">
            <div className="w-100" style={{ maxWidth: "860px", maxHeight: "860px", border: "2px solid", margin: "40px auto" }}>
                <h1 className="header">Memory Game!</h1>
                <Board></Board>
            </div>
        </Container>
    )
}
