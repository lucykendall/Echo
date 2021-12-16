import React from "react";
import Flippy, {FrontSide, BackSide } from 'react-flippy';
import { Seaweed } from "../../images";

const FlippyStyle = {
    width: '200px',
    height: '300px',
    justifyContent: 'center',
}
 
export default function Card( {handleClick, flipped, clicked, card} ) { //only use props not state
    function handleCardClick() {
        if (!clicked) {
            handleClick(card)
        }
    }

    return (
            <div className="individual-card">
                <Flippy
                    flipDirection="horizontal"
                    isFlipped={flipped}
                >
                    <FrontSide>
                        <img className="front-img" src = { Seaweed } onClick= { handleCardClick } alt="seaweed"/>
                    </FrontSide>
                    <BackSide>
                        <img className="back-img" src ={ card.image } alt="fish"/>  
                    </BackSide>
                </Flippy>
            </div>
    )
}