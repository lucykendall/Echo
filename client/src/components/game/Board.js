import React, { useState, useEffect } from "react";
import { Button, Row, Col } from "react-bootstrap"
import { fishImages } from "../../images/index";
import Card from './Card'

export default function Board() {
    const [cards, setCards] = useState([]) //a selection of cards
    const [openHand, setOpenHand] = useState([]) // cards open, only two at a time
    const [matchedCards, setMatchedCards] = useState({}) // cards matched up, i.e. no longer able to be matched
    const [turns, setTurns] = useState(0);
    const [flipped, setFlipped] = useState(false)

    //randomising cards
    function randomiseCards() { 
        const randomiseCards = [...fishImages, ...fishImages].sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, key: Math.random() }));
        //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

        setCards(randomiseCards)
        setOpenHand([])
        setMatchedCards({})
        setTurns(0);
    }

    function handleClick(index) {
        if (openHand.length === 1) {
            setOpenHand((prevCard) => [...prevCard, index])
            setTurns((turns) => turns += 1)
        } else {
            setOpenHand([index])
        }
    }

    function cardMatch() {
        const firstCard = openHand;
        const secondCard = openHand;

        if (cards[firstCard].name === cards[secondCard].name) {
            setMatchedCards((prevCards) => {
                return prevCards.map((card) => {
                    if (card.name === cards[firstCard].name) {
                        setOpenHand([])
                        return { ... card, solved: true}
                    }
                })
            })
        } else {
            setTimeout(() => { setOpenHand([]) }, 500);
        }
    }

    function checkCardSolved(card) {
        if (matchedCards[card.solved] === true) {
            setFlipped(true)
        }
    }

    useEffect(() => {
        if (openHand.length === 2) {
            setTimeout(cardMatch, 500);
        }
    }, [openHand])

    useEffect(() => { // if player ticks checks new game, listens for a new game
        randomiseCards();
    }, []);

    return (
        <div className="board">
            <Row>
                { cards.map((card, index) =>(
                    <Col xs="12" sm="3">
                    <Card key={card.key} id='name'
                        card={card}
                        index={index}
                        onClick={handleClick}
                        flipped={checkCardSolved(card)}
                        />
                    </Col>
                ))}
            </Row>
            <Button style={{ backgroundColor: "#FB6245", color: "#fff" }} variant="outline-primary" onClick={randomiseCards}>New Game</Button>{' '}
        </div>
    )
}