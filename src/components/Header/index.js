import React from 'react';
import Logo from '../../assets/img/logoPokemon.png';
import './style.css';

function Header() {
    return (
        <div className="header" >
            <img src={Logo} alt="Pokemon" />
        </div>
    )
}

export default Header;