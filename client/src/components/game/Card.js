import React from "react";

export default function Card( props ) {
     //only use props not state
    return (
        <div className="individual-card">
            <img className="front" src={ props.card.image } style={{ height: 200, width: 200}} alt="card"/>
        </div>
    )
}