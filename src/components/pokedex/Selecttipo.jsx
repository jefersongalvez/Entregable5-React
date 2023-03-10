import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './style/selecttipo.css'

const Selecttipo = ({ setSelectvalue }) => {
    const [tipo, setTipo] = useState()
    useEffect(() => {
        const url = 'https://pokeapi.co/api/v2/type'
        axios.get(url)
            .then(res => setTipo(res.data))
            .catch(err => console.log(err))
    }, [])
    const handlechange = e => {
        setSelectvalue(e.target.value)
    }

    return (
        <select className='select' onChange={handlechange}>
            <option className='select__option' value='Todos los pokemones'> Todos los pokemones</option>
            {
                tipo?.results.map(tipo => (
                    <option className='select__option2' key={tipo.url} value={tipo.url}>{tipo.name}</option>
                ))
            }
        </select>
    )
}

export default Selecttipo