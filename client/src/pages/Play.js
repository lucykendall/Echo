import React from 'react'
import { Container } from 'react-bootstrap';
import Board from '../components/game/Board';

export default function Play() { 

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ maxWidth: "900px"}}>
            <div className="w-100" style={{ maxHeight: "1000px", borderColor: "rgb(248,126,101)", border:  "2px solid", borderRadius: "25px", margin: "40px auto" }}>
                <h1 className="header" style={{ textAlign: "center", color: "rgb(62, 147, 84)"}}>Memory Game!</h1>
                <Board></Board>
            </div>
        </Container>
    )
}
