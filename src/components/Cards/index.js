import React from 'react';
import './style.css';

const Cards = (props) => {
    return (
        <div>
            <p className="title"><strong>{props.name}</strong></p>
            <img src={props.picture} alt="Pokemon" />
            <p>Pontos: <strong>{props.points}</strong></p>
            <p>Poder: <strong>{props.power}</strong></p>
            <p>Tipo: <strong>{props.type}</strong></p>
        </div>
    );
};

export default Cards;