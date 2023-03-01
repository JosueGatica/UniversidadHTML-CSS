let contador = 0;

while (contador < 3){
    console.log(contador);
    contador++;
}
console.log("Fin ciclo while");

contador = 0;
do{
    console.log(contador);
    contador++;
} while (contador < 3);
console.log("Fin ciclo do while");


for (let index = 0; index < 3; index++) {
    console.log(index);  
}
console.log("Fin ciclo for");

//Break en for
for (index = 0; index <= 10; index++) {
    if (index % 2 == 0){ //Primer par
        console.log(index);
        break;
    }
}
console.log("Fin ciclo for con break");

//Continue en for
for (index = 0; index <= 10; index++) {
    if (index % 2 !== 0){ //No pares
        continue; //Ir a la siguiente iteracion
    } //No es necesario el else
    console.log(index);
}
console.log("Fin ciclo for con break");

//Etiquetas
inicio:
for (index = 0; index <= 10; index++) {
    if (index % 2 !== 0){ //No pares
        continue inicio; //Va a la etiqueta de inicio
    } //No es necesario el else
    console.log(index);
}