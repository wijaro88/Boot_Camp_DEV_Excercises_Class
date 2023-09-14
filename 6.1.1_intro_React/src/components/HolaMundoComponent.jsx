import ElementoListaComponent from "./ElementoListaComponent";
import BotonComponent from "./BotonComponent";

const HolaMundoComponent = (
  props) => {

  const mostrarMensaje  = () => {
      alert(`Hola`);
    }

  return (
    <>
      <h1>Hola Mundo</h1>
      <h2>Mi nombre es: {props.nombre}</h2>
      <h2> Mis colores favoritos son: </h2>
      <ul>
        {
          props.colores.map((colorNombre, index) => {
              return (
                <ElementoListaComponent color={colorNombre} key={index} />
              )
            })
        }
      </ul>
      <BotonComponent comportamiento={mostrarMensaje} />

    </>
  )
}

export default HolaMundoComponent;