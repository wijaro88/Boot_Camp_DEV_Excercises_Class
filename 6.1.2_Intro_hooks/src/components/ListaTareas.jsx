import { useState } from "react";
import Tarea from "./Tarea";

const ListaTareas = ({ titulo }) => {

    //usestate es un hock que sirve para crearestado
    const [contador, setContador] = useState(0);
    const [nuevaTarea, setNuevatarea] = useState(" ");
    const [tareas, setTareas] = useState([]);

    const agregarTarea = () => {
        setContador(contador + 1);
        //... para agregar a un arreglo existente en este caso a tarea le agrega nuevaTarea
        setTareas([...tareas, nuevaTarea]);
        // alert(tareas);
    }
    const eliminarTarea = (indexTareaABorrar) => {
        setTareas(tareas.filter((tareaTexto, index) => index !== indexTareaABorrar));
    }

    return (
        <>
            <h1>{titulo}</h1>
            <label>Tarea nueva:</label>
            <input
                value={nuevaTarea}
                onChange={(event) => { setNuevatarea(event.target.value) }}>
            </input>
            <button onClick={agregarTarea}>Agregar tarea</button>

            <p>Contador: {contador}</p>
            <ul>
                {
                    tareas.map((tareaTexto, index) => {
                        return (
                            <Tarea
                                key={index}
                                titulo={tareaTexto}
                                eliminarTarea={() => eliminarTarea(index)}
                            />
                        )
                    })
                }
            </ul>
        </>
    )

}

export default ListaTareas;