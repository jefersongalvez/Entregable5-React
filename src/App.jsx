

import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Rutaproteg from './pages/Rutaproteg'
import Pokedex from './pages/Pokedex'
import Cardinfo from './pages/Cardinfo'

function App() {


  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route element={<Rutaproteg />}>
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:id' element={<Cardinfo />} />
        </Route>
      </Routes>
    </div>
  )
}
export default App
