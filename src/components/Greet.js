import React from 'react';

const Greet = (props) => {
    return (
        <div>
            <p>Ola <strong>{props.name}</strong>, sua dieta é <strong>{props.diet}</strong></p>
        </div>
    )
};

export default Greet;