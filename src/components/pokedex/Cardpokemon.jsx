import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style/cardpokemon.css'

const Cardpokemon = ({ pokemon }) => {
    const [poke, setPoke] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(pokemon.url)
            .then(res => setPoke(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleclick = () => {
        navigate(`/pokedex/${poke.id}`)
    }
    return (
        <article onClick={handleclick} className={`card border-${poke?.types[0].type.name}`}>
            <header className={`card__header bg-${poke?.types[0].type.name}`}>
                <img className='card__img' src={poke?.sprites.other['official-artwork'].front_default} alt='' />
            </header>
            <h2 className={`card__name color-${poke?.types[0].type.name}`}> {poke?.name}</h2>
            <ul className='card__listtype'>
                {
                    poke?.types.map(type => (
                        <li className='card__itemtype' key={type.type.name}>{type.type.name}</li>
                    )
                    )
                }
            </ul>
            <hr />
            <ul className='card__liststat'>
                {
                    poke?.stats.map(stat => (
                        <li className='card__itemstat' key={stat.stat.url}>
                            <span className='card_statname'>{stat.stat.name}</span>
                            <span className={`card__statnumber color-${poke?.types[0].type.name}`}>{stat.base_stat}</span>
                        </li>
                    ))
                }
            </ul>
        </article>
    )
}

export default Cardpokemon