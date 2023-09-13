import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '../../../../../../../vite.svg'
import './App.css'
import HolaMundoComponent from './components/HolaMundoComponents'

function App () {
  const [count, setCount] = useState(0)

  return (
    <>
      <HolaMundoComponent nombre='alfredo' colores={['azul', 'rosa', 'verde']} />
      <HolaMundoComponent nombre='alfredo' colores={['azul', 'rosa', 'verde']} />
      <HolaMundoComponent nombre='alfredo' colores={['azul', 'rosa', 'verde']} />
    </>
  )
}

export default App
