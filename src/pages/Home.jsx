import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameTrainer } from '../store/slices/trainerName.slice'
import './style/home.css'

const Home = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setNameTrainer(e.target.name.value.trim()))
        e.target.name.value = ''
        navigate('/pokedex')
    }
    return (
        <div className='home'>
            <img className='home__img' src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png" />
            <h2 className='home__title'> Hola entrenador pokemon</h2>
            <p className='home__container'> Para empezar este Pokedex, Escribe tu nombre de entrenador</p>
            <form className='home__form' onSubmit={handleSubmit}>
                <input className='home__input' id='name' type="text" />
                <button className='home__btn'>Comenzar</button>
            </form>
        </div>
    )
}

export default Home