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
        if(weakest === true){
            setPowerful(false)
        }
        if(powerful === true){
            setWeakest(false)
        }
    }, [powerful, weakest])

    const pokemonFilter = pokemons.filter(e => {
        return (e.name.toLowerCase().includes(searchValue.toLowerCase()));
    });

    const filteredPokemons = searchValue ? pokemonFilter : pokemons;

    const highestPokemon = pokemons.reduce((previousValue, currentValue) => {
        return (
            previousValue = previousValue.points > currentValue.points ? previousValue : currentValue
        );
    });

    const lowestPokemon = pokemons.reduce((previousValue, currentValue) => {
        return (
            previousValue = previousValue.points < currentValue.points ? previousValue : currentValue
        );
    });

    const strongestPokemon = pokemons.filter(e => {
        return (e === highestPokemon);
    });

    const weakPokemon = pokemons.filter(e => {
        return (e === lowestPokemon);
    });

    const greatestPokemon = powerful ? strongestPokemon : pokemons;
    const weakestPokemon = weakest ? weakPokemon : pokemons;

    const pokemonStrength = powerful ? greatestPokemon : weakestPokemon;

    return (
        <div>
            <div>
                <Header />
            </div>

            <div className="search">
                <input placeholder="Digite o nome do Pokemon" onChange={event => setSearchValue(event.target.value)} />
            </div>

            <div className="buttons">
                <button onClick={() => setPowerful(!powerful)}>Mais Forte</button>
                <button onClick={() => setWeakest(!weakest)}>Mais Fraco</button>
            </div>

            <div className="card">
                <ul>
                    {
                        !searchValue
                            ?
                            pokemonStrength.map(e => {
                                return (
                                    <li key={e.id}>
                                        <Cards name={e.name} picture={e.picture} points={e.points} power={e.power} type={e.type} />
                                    </li>
                                )
                            })
                            :
                            filteredPokemons.map(e => {
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