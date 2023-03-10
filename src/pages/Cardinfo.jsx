import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/shared/Header'
import './style/cardinfo.css'

const Cardinfo = () => {
    const { id } = useParams()
    const [pok, setPok] = useState()
    const [error, setError] = useState(false)
    useEffect(() => {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        axios.get(url)
            .then(res => {
                setPok(res.data)
                setError(false)
            })
            .catch(err => {
                console.log(err)
                setError(true)
            })
    }, [id])
    console.log(pok)

    if (error) {
        return <h1>el Pokemon con el nombre {id} no existe en la base de datos</h1>
    }
    else {
        return (

            <div className='cardinfo'>
                <Header />
                <div className={`info bg-${pok?.types[0].type.name}`}>
                    <img className='info__img' src={pok?.sprites.other['official-artwork'].front_default} alt="" />
                </div>
                <div className={`container color-${pok?.types[0].type.name}`}>
                    <p className='info__number'># {pok?.id}</p>
                    <h1 className='info__name'>{pok?.name}</h1>
                    <ul className='info__list1'>
                        <li className='info__item1'><span className='item__label'>Peso: </span>{pok?.weight}</li>
                        <li className='info__item1'><span className='item__label'>Altura: </span>{pok?.height}</li>
                    </ul>
                    <ul className='info__list2'>
                        <h2 className='info__type'>Tipo</h2>
                        {
                            pok?.types.map(type => (
                                <li className='info__item2' key={type.type.url}>{type.type.name}</li>
                            ))
                        }
                    </ul>
                    <u className='info__list3'>
                        <h2 className='info__habilidades'>Habilidades</h2>
                        {
                            pok?.abilities.map(ability => (
                                <li className='info__item3' key={ability.ability.url}>{ability.ability.name}</li>
                            ))
                        }
                    </u>
                </div>


                <div className={`container2 bg-${pok?.types[0].type.name}`}>
                    <ul className='info__list4'>
                        <h2 className='info__stats'>Stats</h2>
                        {
                            pok?.stats.map(stat => (
                                <li className='info__item4' key={stat.stat.url}>{stat.stat.name} : <b>{stat.base_stat}/100</b></li>
                            ))
                        }

                    </ul>
                    <ul className='info__list5'>
                        <h2 className='info__movimientos'>Movimientos</h2>
                        {pok?.moves.map(mov => (
                            <li className='info__item5' key={mov.move.url}>{mov.move.name} </li>
                        ))
                        }
                    </ul></div>

            </div>
        )
    }
}

export default Cardinfo