import React from "react";
import { Seaweed } from "../../images";

export default function Card( props ) {
     //only use props not state
    return (
        <div className="individual-card">
            <img className="back-img" src = { Seaweed } style={{ height: 100, width: 100}} alt="seaweed"/>
            <img className="front-img" src={ props.card.image } style={{ height: 100, width: 100}} alt="fish"/>
        </div>
    )
}