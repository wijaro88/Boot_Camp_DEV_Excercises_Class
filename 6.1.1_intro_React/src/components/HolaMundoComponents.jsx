const HolaMundoComponent = (props) => {
  return (
    <>
      <h1>Hola mundo</h1>
      <h2>mim nombre es: {props.nombre}</h2>
      <h2>Mis Colores favoritos</h2>
      <ul>
        <li>props.Colores</li>
        <li>rojo</li>
        <li>blanco</li>
      </ul>

    </>
  )
}
export default HolaMundoComponent
