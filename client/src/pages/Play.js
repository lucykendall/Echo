import React from 'react'
import { Container } from 'react-bootstrap';
import Board from '../components/game/Board';

export default function Play() { 

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ maxWidth: "900px"}}>
            <div className="w-100" style={{ maxHeight: "900px", margin: "20px auto" }}>
                <h1 className="h2" style={{ textAlign: "center", color: "rgb(37, 86, 54)"}}>Click New Game to begin! </h1>
                <Board></Board>
            </div>
        </Container>
    )
}
