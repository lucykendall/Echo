import React from "react";

export default function Card() { //only use props not state
    return (
        <div><img src={ props.card } alt="card"/></div>
    )
}