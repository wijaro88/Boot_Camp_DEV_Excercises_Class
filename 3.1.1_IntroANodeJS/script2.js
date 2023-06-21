// EJERCICIO 1
// alert
console.log("EJERCICIO QUE MUESTRA LOS NUMEROS DE 5 ENTRE 1 Y EL NUMERO DIGITADO");
// let num = parseInt( prompt("digite el numero limite: "));
let num = 10;
console.log(`los multiplos de 5 hasta el numero ${num} son:`);

for (let i = 1; i <= num; i++) {
    if (i % 5 === 0 ){
        console.log(i);
    }
}

//EJERCICIO 2
// alert
// console.log("Digita 2 numeros entre 1 y 50");
// let num1 = parseInt(prompt("digite el primer numero:"));
// let num2 = parseInt(prompt("digite el segundo numero:"));
// let num1 = 20;
// let num2 = 15;

// for (let i = 1; i <= 50; i++) {
//     if (i==num1 || i==num2){
//         console.log(`numero ${i} ; ¡loteria!`);
//     }
//     else{
//         console.log(`numero ${i}`);
//     }
// }

//EJERCICIO 3
// alert("digite numeros y el 0 detiene la captura");

// function captura(){
//     let numeros= [] ;
//     while(true){
//         let num = parseInt(prompt("digite numero 0 para detener la captura"));
//     if (num === 0) {
//     break;
//     }
//     if (!isNaN(num)) {
//         numeros.push(num);
//     }
//     }
//     return numeros;
// }
// let lista = captura();

// console.log("lista de numeros")
// console.log(lista);

//EJERCICIO 4

// alert("captura de palabras o letras si envia sin valor termina el programa");


// function capturarPalabras() {
//     let palabras = [];
//     let entrada;
  
//     do {
//       entrada = prompt("Ingrese una letra o palabra (deje vacío para terminar):");
  
//       if (entrada) {
//         palabras.push(entrada);
//       }
//     } while (entrada !== "");
  
//     return palabras;
//   }
  
//   let palabrasCapturadas = capturarPalabras();
//   let resultado = palabrasCapturadas.join("");
  
//   console.log("Palabras capturadas:");
//   console.log(resultado);
  
//EJERCICIO 5
// let acount=1;


//     while (acount==1) {
//     let dia = prompt("indique el dia de la semana:  ").toLowerCase();
    
//     if(dia=="lunes"){
//         alert("Lunes con L de Lo puedes hacer");
//             }
//     else if(dia== "martes"){
//         alert("Martes con M de Mejor lo podemos hacer");
//             }
      
//     else if(dia=="miercoles"){
//         alert("Miercoles con M de Mucho mejor que ayer");
//             }
    
//     else if(dia== "jueves"){
//             alert("Jueves con J de Jamas Rendirse");
//             }
          
//     else if(dia=="viernes"){
//         alert("Viernes con V de Victory");
//             }
    
//     else if(dia== "sabado"){
//         alert("Sabado con S de Somos los Mejores");
//                 }
              
//     else if(dia=="domingo"){
//         alert("Domingo con D de Descanzo merecido CAMPEON!!!!!");
//        acount = 0;
//                 }
//     acount=0;
//     }

console.log("Escribe tu nombre:");
const stdin = process.openStdin();

stdin.addListener("data", (data) => {
    console.log("Tu nombre es: " + data.toString());
    process.exit();
})