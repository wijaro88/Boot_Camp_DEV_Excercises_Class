// alert("API");
let pokemon =parseInt(prompt("digite el numero de pokemon:"));

let response = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);

response.then((value)=>{
    // document.write(value.status);
    // document.write(value.body);
    return value.json();
}).then((valueJson)=> {
    document.write(valueJson.name);
    
    console.log(valueJson);
    hr
    document.write(valueJson.ability);
    document.write(valueJson.base_experience);
    document.write(valueJson.height);
    document.write(valueJson.id);
    document.write(valueJson.weight);
}).catch((err) => {
    document.write(err);
    document.write("Ocurrio un error");
});

