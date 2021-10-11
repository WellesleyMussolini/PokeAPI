import React from 'react';
import Header from '../../components/Header';
import Pokeball from '../../assets/img/NotFoundPokeball.png';
import './style.css';

function NotFound() {
    return (
        <div className="component-div">
            <Header />

            <div className="NotFound">
                <h1>404</h1>
                <h2>OPS... Página não encontrada</h2>
                <img src={Pokeball} alt="Pokeball" id="Pokeball-icon" />
            </div>
        </div>
    )
}

export default NotFound;