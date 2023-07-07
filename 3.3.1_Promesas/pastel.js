let promesa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("preparar ingredientes");
        resolve("Cumplido Preparar");
    }, 2000);
});

let promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Mezclar ingredientes");
        resolve("Mezclar ingredientes");
    }, 3000);
});
    // Código que se ejecuta cuando la promesa anterior se cumple.
    promesa2.then((valorPromesaCumplida) => {
        console.log("Pasos cumplidos");
        console.log(valorPromesaCumplida);
        //Si quisiéramos tener otra promesa después de esta, tendríamos 
        // que meterla aquí.
        let promesa5 = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Precalentar Horno");
                resolve("Precalentar Horno");
            }, 5000);
        });
        //El código comenzaría a complicarse si empezamos a anidar promesas así.
    // Código que se ejecuta cuando la promesa anterior no se cumple.
    }).catch((promesaRechazada) => {
        console.log("Promesa fallida");
    });


Promise.allSettled([promesa2]).then((valorPastel) => {
    setTimeout(() => {
        console.log("SE HORNEO EL PASTEL");
    console.log(valorPastel);
    }, 7000)
    
});