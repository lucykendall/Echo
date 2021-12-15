import React, { useState, useEffect } from "react";
import { Button, Row, Col } from "react-bootstrap"
import { fishImages } from "../../images/index";
import Card from './Card'

export default function Board() {
    const [cards, setCards] = useState([]) //a selection of cards
    const [selection1, setSelection1] = useState(undefined) // state for first selection
    const [selection2, setSelection2] = useState(undefined) // state for second selection
    const [moves, setMoves] = useState(0);

    //randomising cards
    function randomiseCards() {
        const randomiseCards = [...fishImages, ...fishImages].sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, key: Math.random() }));

        setCards(randomiseCards)
        setSelection1(undefined)
        setSelection2(undefined)
        setMoves(0);
    }

    return (
        <div className="board">
            <Row>
                { cards.map((card) =>(
                    <Col xs="12" sm="3">
                    <Card key={card.key} id='name'
                        card={card}/>
                    </Col>
                ))}
            </Row>
            <Button style={{ backgroundColor: "#FB6245", color: "#fff" }} variant="outline-primary" onClick={randomiseCards}>New Game</Button>{' '}
        </div>
    )
}