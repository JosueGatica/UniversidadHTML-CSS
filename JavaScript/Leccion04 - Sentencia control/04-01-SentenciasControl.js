//Bloque condicional

let condicion = true;

//IF ELSE 
if (condicion){
    console.log("Condicion verdadera"); 
} else {
    console.log("Condicion falsa"); 
}

let numero = 1;

if (numero == 1){
    console.log("Numero 1");
} else if (numero == 2){
    console.log("Numero 2");
} else if (numero == 3 ){
    console.log("Numero 3");
} else if (numero == 4){
    console.log("Numero 4");
} else {
    console.log("Numero desconocido")
}

let mes = 4;
let estacion;

if ((mes == 1) || (mes == 2) || (mes == 12)){
    estacion = "Invierno";
} else if ((mes == 3) || (mes == 4) || (mes == 5)){
    estacion = "Primavera";    
} else if ((mes == 6) || (mes == 7) || (mes == 8)){
    estacion = "Verano";   
} else if ((mes == 9) || (mes == 10) || (mes == 11)){
    estacion = "Otoño";   
} else estacion = "Valor incorrecto";

console.log(estacion);

/*
6am-11am - Buenos dias
12pm-18pm - Buenos tardes
19pm-24pm - Buenos noches
0am-6am - Durmiendo
*/

let hora = 5;
let mensaje;

if ((hora >= 6) && (hora <= 11)){
    mensaje = "Buenos dias";
} else if ((hora >= 12) && (hora <= 18)){
    mensaje = "Buenos tardes";
} else if ((hora >= 19) && (hora <= 24)){
    mensaje = "Buenos noches";
} else if ((hora >= 0) && (hora < 6)){
    mensaje = "Durmiendo";
}

console.log(mensaje);

numero = 5;
let numeroTexto = "Valor desconocido";

//SWITCH
switch (numero){
    case 1:
        numeroTexto = "Numero 1";
        break;
    case 2: 
        numeroTexto = "Numero 2";
        break;
    case 3: 
        numeroTexto = "Numero 3";
        break;
    case 4: 
        numeroTexto = "Numero 4";
        break;
    default:
        numeroTexto = "Caso no encontrado";
}

console.log(numeroTexto);

mes = 11;

switch (mes){
    case 1: case 2: case 12:
        estacion = "Invierno";
        break;
    case 3: case 4: case 5:
        estacion = "Primavera";
        break;
    case 6: case 7: case 8:
        estacion = "Verano";
        break;
    case 9: case 10: case 11:
        estacion = "Otoño";
        break;
    default:
        estacion = "Valor incorrecto";
}

console.log(estacion);