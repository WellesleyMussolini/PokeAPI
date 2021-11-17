import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import './style.css';
import Cards from '../../components/Cards/index';
import { pokemons } from '../../data/pokemons';

function Home() {
    const [searchValue, setSearchValue] = useState("");
    const [powerful, setPowerful] = useState(false);
    const [weakest, setWeakest] = useState(false);

    useEffect(() => {
        if (powerful) {
            return setWeakest(false);
        }
        else if (weakest) {
            return setPowerful(false);
        }
        return;
    }, [powerful, weakest]);

    const pokemonFilter = pokemons.filter(e => {
        return (e.name.toLowerCase().includes(searchValue.toLowerCase()));
    });

    const greatestPokemon = pokemons.reduce((previousValue, currentValue) => {
        return (
            previousValue = previousValue.points > currentValue.points ? previousValue : currentValue
        );
    });

    const weakestPokemon = pokemons.reduce((previousValue, currentValue) => {
        return (
            previousValue = previousValue.points < currentValue.points ? previousValue : currentValue
        );
    });

    let result = pokemons;

    if (powerful) {
        result = pokemons.filter(e => {
            return (e === greatestPokemon);
        });
    }
    else if (weakest) {
        result = pokemons.filter(e => {
            return (e === weakestPokemon);
        });
    }
    else if (searchValue) {
        result = pokemonFilter;
    }

    return (
        <div>
            <div>
                <Header />
            </div>

            <div className="search">
                <input placeholder="Digite o nome do Pokemon" onChange={event => setSearchValue(event.target.value)} />
            </div>

            <div className="buttons">
                <button id="forte" onClick={() => setPowerful(!powerful)}>FORTE</button>
                <button id="fraco" onClick={() => setWeakest(!weakest)}>FRACO</button>
            </div>

            <div className="card">
                <ul>
                    {
                        result.map(e => {
                            return (
                                <li key={e.id}>
                                    <Cards name={e.name} picture={e.picture} points={e.points} power={e.power} type={e.type} />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default Home;