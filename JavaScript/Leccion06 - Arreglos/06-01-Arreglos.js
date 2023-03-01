//Creacion de un arreglo en JS

// let autos = new array("BMW","Mercedes Benz","Volvo");

const autos = ["BMW","Mercedes Benz","Volvo"];
console.log(autos);

//Acceder a valores del arreglo
console.log(autos[0]);
console.log(autos[1]);
console.log(autos[2]);

for (let i = 0; i < autos.length; i++){
    console.log(i + " : " + autos[i]);
}

//Modificar valor
autos[1] = "MercedesBenz"; 
console.log(autos[1]);

//Agregar valores
autos.push("Audi");
console.log(autos[3]);

console.log(autos.length);
autos[autos.length] = "Cadillac";
console.log(autos);

autos[6] = "Porshe"; //Indice 5 vacio
console.log(autos);

//Preguntar si es un array
console.log(typeof autos);
console.log(Array.isArray(autos));
console.log(autos instanceof Array);
