// alert("API");
let pokemon =parseInt(prompt("digite el numero de pokemon:"));

let response = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);

response.then((value)=>{
    // document.write(value.status);
    // document.write(value.body);
    return value.json();
}).then((valueJson)=> {
    document.write(valueJson);
    console.log(valueJson);
    document.write(valueJson.ability(Name));
    document.write(valueJson.name);
    document.write(valueJson.height);
    document.write(valueJson.order);
    document.write(valueJson.types);
}).catch((err) => {
    document.write(err);
    document.write("Ocurrio un error");
});

