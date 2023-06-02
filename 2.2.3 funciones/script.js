
//alert("Funciones");

function sumar(num1, num2){
    let resultado = num1 + num2;
    //return resultado;
}

let num1 = 4;
let num2 = 5;

let resultadoSuma = sumar(num1, num2);
console.log(`El resultado de sumar ${num1} y ${num2} es ${resultadoSuma}`);

// Funciones anidadas
function funcionPadre(){
    let x = 0;

    function funcionHija(){
        console.log("Hola, yo soy la función HIJA");
    }

    console.log("Hola, yo soy la función PADRE");

    return funcionHija;
}

let funcionHijaVariable = funcionPadre();
console.log(typeof funcionHijaVariable);
funcionHijaVariable();

// Ejemplo return con función
function funcionPadre2(){
    let x = 0;

    function funcionHija2(){
        console.log("Hola, yo soy la función HIJA2");
        return 1;
    }

    console.log("Hola, yo soy la función PADRE2");

    return funcionHija2();
}

let resultadoDeFuncionHija = funcionPadre2();
console.log(typeof resultadoDeFuncionHija);
console.log(`El valor retornado es: ${resultadoDeFuncionHija}`)

let resultado = 10;

function restar(num){
    console.log(`Resultado antes de operación: ${resultado}`);
    resultado -= num; // resultado = resultado - num;
    console.log(`Resultado después de operación: ${resultado}`);
    return resultado;
}

function multiplicar(num){
    console.log(`Resultado antes de operación: ${resultado}`);
    resultado *= num;
    console.log(`Resultado después de operación: ${resultado}`);
    return resultado;
}

restar(5);
multiplicar(2.5);

console.log(`El resultado final es: ${resultado}`);
