import React from 'react';
import Header from '../../components/Header';
import './style.css';
import Props from '../../components/Props/index';
import { pokemons } from '../../data/data';

function Home() {
    return (
        <div>
            <div>
                <Header />
            </div>

            <div className="card">
                <ul>
                    {
                        pokemons.map(e => {
                            return (
                                <li key={e.id}>
                                    <Props name={e.name} picture={e.picture} power={e.power} />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Home;