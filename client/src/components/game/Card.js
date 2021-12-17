import React, { useState } from "react";
import Flippy, {FrontSide, BackSide } from 'react-flippy';
import { Seaweed } from "../../images";

const FlippyStyle = {
    width: '200px',
    height: '200px',
    justifyContent: 'center',
}
 
export default function Card( {handleClick, flipped, clicked, card, solved} ) {
    const [disabled, setDisabled] = useState(false)
        
    function handleCardClick() {
        if (!clicked) {
            handleClick(card)
        } else if (clicked && solved) {
            setDisabled(true)
        } else {
            setDisabled(false)
        }
    }

    return (
            <div className="individual-card" onClick= { handleCardClick }>
                <Flippy
                    flipDirection="horizontal"
                    isFlipped={flipped}
                    style={FlippyStyle}
                    flipOnClick={disabled}
                >
                    <FrontSide>
                        <img className="front-img" src = { Seaweed } alt="seaweed"/>
                    </FrontSide>
                    <BackSide>
                        <img className="back-img" src ={ card.image } alt="fish"/>  
                    </BackSide>
                </Flippy>
            </div>
    )
}