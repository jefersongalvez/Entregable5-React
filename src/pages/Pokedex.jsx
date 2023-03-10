import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Cardpokemon from '../components/pokedex/Cardpokemon'
import Selecttipo from '../components/pokedex/Selecttipo'
import Header from '../components/shared/Header'
import './style/pokedex.css'

const Pokedex = () => {

    const { nameTrainer } = useSelector(state => state)
    const [pokemons, setPokemons] = useState()
    const [selectvalue, setSelectvalue] = useState('Todos los pokemones')

    useEffect(() => {
        if (selectvalue === 'Todos los pokemones') {
            const url = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0'
            axios.get(url)
                .then(res => setPokemons(res.data))
                .catch(err => console.log(err))
        }
        else {
            axios.get(selectvalue)
                .then(res => {
                    const results = res.data.pokemon.map(pok => pok.pokemon)
                    setPokemons({ results })
                }
                )
                .catch(err => console.log(err))
        }

    }, [selectvalue])
    const navigate = useNavigate()
    const handlesubmit = e => {
        e.preventDefault()
        const inputValue = e.target.pok.value.trim().toLowerCase()
        navigate(`/pokedex/${inputValue}`)
        e.target.pok.value = ''
    }

    return (
        <div>
            <Header />
            <h1 className='pokedex__title'><span className='pokedex__name'>Hola {nameTrainer}</span>, aqui puedes encontrar a tu pokemon favorito</h1>
            <form className='pokedex__form' onSubmit={handlesubmit}>
                <input id='pok' type='text' />
                <button>Buscar</button>
            </form>
            <Selecttipo setSelectvalue={setSelectvalue} />
            <div className='pokedex__container'>
                {
                    pokemons?.results.map(pokemon => (
                        <Cardpokemon key={pokemon.url} pokemon={pokemon} />
                    ))
                }
            </div>
        </div>
    )
}

export default Pokedex