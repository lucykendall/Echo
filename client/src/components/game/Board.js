import React from "react";
import { Row, Col } from "react-bootstrap"
import { fishImages } from "../../images/index";
import Card from './Card'

export default function Board() {
    const [cards, setCards] = useState([]) //a selection of cards
    const [selection1, setSelection1] = useState(undefined) // state for first selection
    const [selection2, setSelection2] = useState(undefined) // state for second selection

    function randomiseCards(event) {
       const randomCards = [...fishImages, ...fishImages].sort(() => Math.random() - 0.5) //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
       .map((card) => ({ ...card, id: Math.random()}));
       
       setCards(randomCards);
       setSelection1(undefined); //need to ensure selection is set to 0
       setSelection2(undefined);

    }

    return (
        <div>
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
            <Button style={{ backgroundColor: "#FB6245", color: "#fff" }} variant="outline-primary" onclick={randomiseCards}>New Game</Button>{' '}
        </div>
    )
}