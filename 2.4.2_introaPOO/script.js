class Comportamiento{
    constructor(comportamientoAnimales, comportamientoPersonas){
        this.comportamientoAnimales = comportamientoAnimales;
        this.comportamientoPersonas = comportamientoPersonas;
    }
}


class Animal{

    constructor(raza, numPatas, color, esSalvaje, tipoDieta, sonido, comportamientoAnimales, comportamientoPersonas, peso){
        this.raza = raza;
        this.numPatas = numPatas;
        this.color = color;
        this.esSalvaje = esSalvaje;
        this.tipoDieta = tipoDieta;
        this.sonido = sonido;
        this.comportamiento = new Comportamiento(comportamientoAnimales, comportamientoPersonas);
        this.peso = peso;
    }

    comer(kilosDeComida){
        console.log(`Soy un ${this.raza} y voy a comer ${kilosDeComida} kg de comida`);
        this.peso += kilosDeComida;
        return this.peso;
    }

    comunicarse(){
        console.log(`¡${this.sonido}!`);
    }

    dormir(horasDeSuenio){

    }

    hacerDelBanio(){

    }

}

let perro = new Animal("Perro", 4, "Cafe", false, "Carnívoro", "woooof", "miedo", "amistoso", 20);

console.log(`Este ${perro.raza} pesa ${perro.peso}`);
let nuevoPeso = perro.comer(1);
console.log(`Despues de comer pesa: ${perro.peso}`);

perro.comunicarse();


console.log(`Mi animal es: ${perro.tipoDieta}`);
perro.tipoDieta = 'Hervíboro';
console.log(`Mi animal es: ${perro.tipoDieta}`);

console.log(`Mi animal ${perro.raza} es ${perro.comportamiento.comportamientoPersonas} con las personas`);

let perroLiteral = {
    raza: "perro",
    numPatas: 4,
    tipoDieta: "carnívoro",
    comportamiento: {
        comportamientoAnimales: "miedoso",
        comportamientoPersonas: "amistoso"
    }
}

let perroLiteral2 = {
    raza: "perro",
    numPatas: 4,
    tipoDieta: "carnívoro",
    comportamiento: {
        comportamientoAnimales: "miedoso",
        comportamientoPersonas: "miedoso"
    }
}

console.log("Ejemplo de objeto literal: ");
console.log(perroLiteral.raza);
console.log(perroLiteral.comportamiento.comportamientoAnimales);
