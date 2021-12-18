import React, { useState, useEffect } from "react";
import { Button, Row, Col } from "react-bootstrap"
import { fishImages } from "../../images/index";
import Card from './Card'

export default function Board() {
    // const emptyCard = { name: '', key: 0, image: '', solved: false };
    const [cards, setCards] = useState([]) //a selection of cards
    const [selection1, setSelection1] = useState(null) // cards open, only two at a time
    const [selection2, setSelection2] = useState(null) // cards matched up, i.e. no longer able to be matched
    const [go, setGos] = useState(0);
    const [clicked, setClicked] = useState(false)
    const [solved, setSolved] = useState(false)

    //randomising cards
    function randomiseCards() { 
        const randomiseCards = [...fishImages, ...fishImages].sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, key: Math.random() }));
        //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

        setSelection1(null)
        setSelection2(null)
        setCards(randomiseCards)
        setGos(0);
        setSolved(false)
    }

    function handleClick(card) {
        if (selection1) {
            setSelection2(card)
        } else {
            setSelection1(card)
        }
    }

useEffect(() => { //if cards match
        if (selection1 && selection2) {
            setClicked(true);
            if (selection1.name === selection2.name) {
                setCards((prevCards) => {
                    return prevCards.map((card) => {
                        if (card.name === selection1.name) {
                            setSolved(true)
                            return { ...card, solved: true}
                        } else {
                            return card
                        }
                    })
                })
                nextGo()
            } else {
                setTimeout(() => nextGo(), 1000)
            }
        }
 }, [selection1, selection2]);

 function nextGo() {

    if (solved) {
        setGos(go)
    } else {
        setGos( (turnBefore) => turnBefore + 1 );
    }
        
    setSelection1(null)
    setSelection2(null)
    setClicked(false)
    setSolved(false)
 }

 useEffect(() => {
     randomiseCards();
 }, []);

    return (
        <div className="d-flex align-items-center justify-content-center flex-column justify-items-center">
            <Row>
                <h4 className="text-center mb-2" style= {{ padding: 10 }}>Turns: {go}</h4>
            </Row>
            <Row className="d-flex justify-content-center" style = {{ padding: 10 }}>
                { cards.map((card, index) =>(
                        <Col key={card.key} xl="15" sm="3" className="d-flex justify-content-center">
                            <Card id='name'
                                className="d-flex align-items-center"
                                card={card}
                                index={index}
                                handleClick={handleClick}
                                clicked={clicked}
                                solved={solved}
                                flipped={ card === selection1 || card === selection2 || card.solved} //card is flipped and to the front
                                />
                        </Col>
                ))}
            </Row>
                <div class="col-md-12 text-center">
                    <Button variant="primary" className="w-25" size="lg" style={{ backgroundColor: "#FB6245", color: "#ffff", marginTop: "5vh", marginBottom: "5vh" }} onClick={randomiseCards}>New Game</Button>
                </div>
        </div>
    )
}