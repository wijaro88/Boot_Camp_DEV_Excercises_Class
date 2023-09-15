const Tarea = ({ titulo, eliminarTarea }) => {
    return (
        <li>
            {titulo}
            <button onClick={eliminarTarea}> Eliminar tarea</button>

        </li>
    )

}
export default Tarea;