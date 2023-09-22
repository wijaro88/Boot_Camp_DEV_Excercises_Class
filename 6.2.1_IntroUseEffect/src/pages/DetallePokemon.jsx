
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link} from "react-router-dom";
import '../style.css';


const DetallePokemon = () => {

    const {id} = useParams();

    const [nombre, setNombre] = useState('');
    const [habilidad, setHabilidad] = useState('');
    const [altura, setAltura] = useState('');

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(response => response.json())
        .then(jsonData => {
            console.log(jsonData);
            setNombre(jsonData.name);
            setAltura(jsonData.height);
            setHabilidad(jsonData.abilities[0].ability.name);
        })
        .catch(error => console.log('Ocurrió un error en la consulta'));
    })

    return (
        <>
        <p><Link to={'/'}>Home </Link></p>
        <h2>{nombre}</h2>
        <p id='habilidad'>Habilidad: {habilidad}</p>
        <p>Altura: {altura} cm</p>
    </>
    )
}

export default DetallePokemon;