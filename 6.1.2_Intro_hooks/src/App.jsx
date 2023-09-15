import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListaTareas from './components/ListaTareas'

function App() {


  return (
    <>
      <ListaTareas titulo='tareas de trabajo' />
      <ListaTareas titulo='tareas del hogar' />
      <ListaTareas titulo='tareas del colegio' />
    </>
  )
}

export default App
