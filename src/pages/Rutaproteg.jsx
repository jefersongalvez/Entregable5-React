import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const Rutaproteg = () => {
    const { nameTrainer } = useSelector(state => state)
    if (nameTrainer) {
        return <Outlet />
    }
    else {
        return <Navigate to='/' />
    }
}


export default Rutaproteg