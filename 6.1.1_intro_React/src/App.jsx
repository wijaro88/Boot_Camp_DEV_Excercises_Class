import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HolaMundoComponent from './components/HolaMundoComponent'

function App () {
 

  return (
    <>
      <HolaMundoComponent nombre='alfredo' colores={['azul', 'rosa', 'verde']} />
      <HolaMundoComponent nombre='mali' colores={['verde', 'rojo', 'amarillo']} />
      <HolaMundoComponent nombre='wilson' colores={['negro', 'blanco', 'cafe']} />
    </>
  )
}

export default App;
