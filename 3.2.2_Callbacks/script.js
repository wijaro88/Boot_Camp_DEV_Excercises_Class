function saludar(nombre){
    console.log(`hola ${nombre}`);
}

function saludoAlien(nombre){
    console.log(`Blublublu ${nombre}`);
}
function saludarConEdad(nombre,edad,callback){
    const nombreConEdad = `${nombre} de ${edad} años`;
    callback(nombreConEdad);

}

saludarConEdad(`Wilson`,37,saludar);
saludarConEdad(`wilson`,37,saludoAlien);

console.log("esperando a ser saludado");
setTimeout(function saludar(){
    console.log("Hola");
}, 2000);
console.log("ya fui saludado");