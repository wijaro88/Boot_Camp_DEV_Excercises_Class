// parseInt retoma el valor entero del numero
// alert("Hola, el JS ya está ligado.");
// alert("Hola, el JS ya está ligado.");

console.log("HOLA" == "hola");
console.log("HOLA" == "HOLA");

/* 23 < 23
false
23 <= 23
true
23 > 23
false
23>= 23
true */

// let edadTransformadaNumero = parseInt(prompt("¿qué edad tienes?"));
let edadCliente = prompt("¿qué edad tienes?");
let edadTransformadaNumero = parseInt(edadCliente);

console.log("Edad del cliente: " + edadCliente);

/* if (edadTransformadaNumero >= 18) {
    console.log("Bienvenido al bar.");
} else {
    console.log("Los menores de edad no entran.");
    document.write(`<a href="https://www.policia.gov.co/">
    <h2>Te llevaremos a la policia!! Por tener ${edadTransformadaNumero} de edad!!</h2>
</a>`);
} */

/* if (edadTransformadaNumero < 18) {
    alert("Los menores de edad no entran.");
} else {
    alert("Bienvenido al bar.");
}
 */
/* if (edadTransformadaNumero < 18) {
    alert("Los menores de edad no entran.");
} */

/* if (edadTransformadaNumero >= 12) {
    console.log("tomate dos pastillas")
}

if (edadTransformadaNumero > 6 && edadTransformadaNumero < 13) {
    console.log("tomate una pastilla");
} */

if (edadTransformadaNumero >= 12) {
    console.log("tomate dos pastillas");
    // tanto código necesiten
} else if (edadTransformadaNumero > 6 && edadTransformadaNumero < 13) {
    console.log("tomate una pastilla");
}

let contrasenia = prompt("¿cual es tu contraseña?");

if (edadTransformadaNumero >= 18) {
    console.log("Bienvenido al bar.");
} else if (edadTransformadaNumero >= 16 && contrasenia === "pudin") {
    console.log("Ve a la puerta de atrás.");
    let dinero = parseFloat(prompt("¿cuanto traes?"));
    let tieneAmigos = prompt("¿tienes amigos adentro?");
    if (tieneAmigos === "si" || dinero >= 20) {
        console.log("Pásate, no veas a nadie a los ojos.");
    }
} else {
    

    }
    console.log("Los menores de edad no entran.");