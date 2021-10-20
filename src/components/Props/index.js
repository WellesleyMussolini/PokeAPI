import React from 'react';
import './style.css';

const Props = (props) => {
    return (
        <div>
            <p className="title"><strong>{props.name}</strong></p>
            <img src={props.picture} alt="Pokemon" />
            <p>Poder: <strong>{props.power}</strong></p>
        </div>
    )
};

export default Props;