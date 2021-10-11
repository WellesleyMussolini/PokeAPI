import React from 'react';
import Header from '../../components/Header';
import './style.css';
import Greet from '../../components/Greet';

function Home(props) {
    const objeto = [
        {
            name: "Wellesley",
            sexo: "M",
            diet: "Vegano"
        },

        {
            name: "Lucas",
            sexo: "M",
            diet: "Vegano"
        },

        {
            name: "Jade",
            sexo: "F",
            diet: "Vegano"
        },
    ]

    return (
        <div>
            <Header />

            <div className="main">

                {
                    objeto.map(e => {
                        return (
                            <Greet name={e.name} diet={e.sexo} />
                        )
                    })
                }
            </div>


        </div>
    )
}

export default Home;