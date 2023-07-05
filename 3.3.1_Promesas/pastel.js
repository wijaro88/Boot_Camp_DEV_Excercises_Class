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

let promesa5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Precalentar Horno");
        resolve("Precalentar Horno");
    }, 5000);
});

Promise.allSettled([promesa2, promesa5]).then((valorPastel) => {
    setTimeout(() => {
        console.log("SE HORNEO EL PASTEL");
    console.log(valorPastel);
    }, 4000)
    
});