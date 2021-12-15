import React from "react";
import { Seaweed } from "../../images";
 
export default function Card( {handleClick, front, clicked, card} ) { //only use props not state
    function handleCardClick() {
        if (!clicked) {
            console.log(card)
            handleClick(card)
        }
    }

    return (
        <div className="individual-card">
            <div className = {front ? "front" : ""}>
                <img className="back-img" src = { Seaweed } onClick= { handleCardClick } style={{ height: 100, width: 100}} alt="seaweed"/>
                <img className="front-img" src={ card.image } style={{ height: 100, width: 100}} alt="fish"/>
            </div>
        </div>
    )
}