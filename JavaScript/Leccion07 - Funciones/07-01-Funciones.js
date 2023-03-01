miFuncion(4,2); //Hosting: Mueve la definicion de la definicion arriba para que se pueda ejecutar

//Declaracion de la funcion
function miFuncion(a,b){
    // console.log("Suma: " + (a+b));
    console.log(arguments.length); //Cantidad de argumentos
    return (a+b);
}

//Llamado a la funcion
let resultado = miFuncion(2,3);
console.log(resultado);

//No se la puede volver a llamar, se llama a asi misma y no puede ser reutilizable
(function (a,b){
    console.log("Ejecutando la funcion : " + (a+b));
})(3,4);

//Muestra la funcion como texto 
var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);

//Funciones de tipo expresion (sin nombre)
let sumar = function (a,b){return (a+b)};
resultado = sumar(1,2);
console.log(resultado);

//Funciones tipo flecha
const sumaFuncionTipoFlecha = (a,b) => a + b;
resultado = sumaFuncionTipoFlecha(3,5);
console.log(resultado);

//Paramteros y argumentos
let sumador = function (a = 4,b = 2){ //Cargar por default)
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return (a+b+arguments[2]);
};
resultado = sumador(1,2,3);
console.log(resultado);

//Tipos primitivos (ni atributos ni metodos)
let x = 10;
//Paso por valor: Tipos que no son objetos, solamente se pasa una copia
function cambiarValor(a){
    a = 20;
}

cambiarValor(x);
console.log(x); //X una copia de su valor, no se modifica su valor

//Paso por referencia -> Persona almacena una referencia a ese objeto
const persona = {
    nombre: "Juan",
    apellido: "Perez"
}

function cambiarValorObjeto(p1){
    p1.nombre = "Carlos";
    p1.apellido = "Lara";
}

cambiarValorObjeto(persona);
console.log(persona);
