//alert("Intro a DOM");


let body = document.getElementsByTagName("body");

console.log(`Inner html de body: ${body[0].innerHTML}`);
console.log(`Outer html de body: ${body[0].outerHTML}`);

function mostrarMensaje(){
    //alert("Botón presionado. :D");
    let h1Titulo = document.getElementById("miTitulo");
    h1Titulo.innerHTML = "Texto modificado. o:";
    h1Titulo.setAttribute("class", "textoVerde");
    
}

function cambiarAAzul(){
    let h1Titulo = document.getElementById("miTitulo");
    let valorClase = h1Titulo.getAttribute("class");
    if(valorClase == "textoVerde"){
        h1Titulo.setAttribute("class", "textoAzul");
    }
}

function crearImagen(){
    let divPadre = document.getElementById("contenedorImagenes");
    let nuevoNodoImagen = document.createElement("img");
    nuevoNodoImagen.setAttribute("src", "img/perrito.jpg");
    divPadre.appendChild(nuevoNodoImagen);
}

function eliminarImagenes(){
    let imagenes = document.getElementsByTagName("img");
    console.log(imagenes);
    let numeroImagenes = imagenes.length;
    for(let i=0; i < numeroImagenes; i++){
        imagenes[0].remove();
    }

    let bodyNode = document.getElementById("body");
    let titulo = document.getElementById("miTitulo");
    bodyNode.removeChild(titulo);
}

console.log("");