/*
Ejemplos de tipos de datos en JavaScript
*/

//Tipo de dato String
var cadena = "Carlos";

console.log(cadena);

//En javaScript las variables son dinamicas, no se especifica el tipo
//de la variable y puede modificarse su tipo
cadena = 10;
//TypeOf: Tipo de dato de la variable
console.log(typeof cadena);

//Tipo de dato numero
var numero = 1000;

console.log(numero);

//Tipo de dato objeto
var objecto = {
    nombre: "Juan",
    apellido: "Perez",
    telefono: 12345678
}

console.log(objecto);

//Tipo de dato boolean (true o false)
var bandera = true;

console.log(bandera);
console.log(typeof bandera);

//Tipo de dato function
function miFuncion(){
}

console.log(typeof miFuncion);

//Tipo de dato symbol
var simbolo = Symbol("Mi simbolo");

console.log(simbolo);
console.log(typeof simbolo);

//Tipo clase es una funcion
class Persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(Persona);
console.log(typeof Persona);

//Tipo undefined
var x;
console.log(x);
console.log(typeof x);

x = undefined;
console.log(typeof x);

//null = ausencia de valor
var y = null;
console.log(y);
console.log(typeof y);

//Arreglos = Son objetos
var autos = ["BMW","AUDI","Volvo"];

console.log(autos);
console.log(typeof autos);

//Tipo cadena vacia (string)
var z = ''; 
console.log(z);
console.log(typeof z);

/*
Concatenacion de cadenas
*/

var nombre = "Juan";
var apellido = "Perez";

var nombreCompleto = nombre + ' ' + apellido;

console.log(nombreCompleto);

var nombreCompleto2 = "Carlos" + ' ' + 'Lara';
console.log(nombreCompleto2);

//JavaScript realiza el casteo por si solo
var x = nombre + 2 + 4; //Al leer de izq a der, toma el dato del primer elemento
console.log(x);

x = nombre + (2+4); //Toma prioridad el parentesis
console.log(x);

x = 2 + 4 + nombre; //Primero la suma y despues se concatena
console.log(x); 

//Declaracion de variables en JavaScript

//Let: Variable;
//Const: Constante, no se modifica el valor;

//Mala practica
//nombre = "Juan"

//Buena practica (primera letra minuscula, segunda mayuscula)
//y no puede arrancar con numero (solo texto, $ o _)
let nombreJuan;
//Sensible a mayusuclas y minusculas
nombreJuan = "Juan";
console.log(nombreJuan);

const apellidoPerez = "Perez";
//apellidoPerez = "Lara"; NO ES POSIBLE

let a,b;
a = 10, b = 20;
let c = a + b;
console.log(c);