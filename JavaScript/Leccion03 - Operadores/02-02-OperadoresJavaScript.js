/*Operadores:*/ 

let a = 3, b=2;
let z = a + b;
console.log("Resultado de la suma: " + z);

z = a - b;
console.log("Resultado de la resta: " + z);

z = a * b;
console.log("Resultado de la multiplicacion: " + z);

z = a / b;
console.log("Resultado de la division: " + z);

z = a % b;
console.log("Resultado de la operacion modulo(residuo): " + z);

z = a ** b;
console.log("Resultado de la operacion exponente: " + z);

/*Incremento y decremento*/
z = a + b;
//PreIncremento(el operador ++ antes de la variable)
z = ++a; //Primero se incrementa
console.log(a);
console.log(z);
//Post-Incremento(el operador ++ despues de la variable) 
z = b++; //Se incrementa despues
console.log(b);
console.log(z);

//PreDecremento(el operador -- antes de la variable)
z = --a; //Primero se decrementa, despues se guarda
console.log(a);
console.log(z);
//Post-Decremento(el operador -- despues de la variable) 
z = b--; //Se decrementa despues
console.log(b);
console.log(z);

//Evaluacion de operadores (prioridad)
let a1 = 3,b1 = 2,c1 =1,d1=4;
let r = a1 * b1 + c1 / d1;
console.log(r);

r = c1 + a1 * b1 /d1;
console.log(r);

r = (c1 + a1) * b1 /c1;
console.log(r);

//Operadores de asignacion (+=, -=, *=, /=, %=, **=)
let u = 1;

u += 3; //Operador compuesto-> a = a + 3
console.log(u);
u -= 2; //a = a - 2
console.log(u);

//Operadores de comparacion
let a2 = 3, b2 = 2, c2 = "3";

//Iguales
let z2 = a2 == c2; //Se revisa el valor sin importar el tipo
console.log(z2);
z2 = a2 === c2; //Revisa si los valores son iguales pero tambien los tipos
console.log(z2);

//Distintos
z2 = a2 != c2; //Se revisa el valor sin importar el tipo
console.log(z2);
z2 = a2 !== c2; //Revisa si los valores son iguales pero tambien los tipos
console.log(z2);

//Operadores relaciones(<,>,<=,>=)
z2 = a2 < b2; 
console.log(z2);
z2 = a2 <= b2;
console.log(z2);
z2 = a2 > b2; 
console.log(z2);
z2 = a2 >= b2;
console.log(z2);

//Operadores logicos

//AND &&
a = 5;
let valMin = 0, valMax = 10;

if (a >= valMin && a <= valMax){
    console.log("Dentro de rango");
}
else{
    console.log("Fuera de rango")
}

//OR ||
let vacaciones = false, diaDescanso = false;

if (vacaciones || diaDescanso){
    console.log("El padre puede asistir al juego del hijo");
} else{
    console.log("El padre esta ocupado")
}

//Ternario -> condicion ? v : f;
let resultado = (3>2) ? "verdadero" : "falso"

console.log(resultado);

let numero = 9;
resultado = ( numero % 2 == 0) ? "Numero par"  : "Numero impar";
console.log(resultado);

//Convertir String a numero
let miNumero = "10x";
console.log(typeof miNumero);

let edad = Number(miNumero);
if (isNaN(edad)){
    console.log("No es un numero");
}
else{
    console.log(typeof edad);

    if (edad >= 18){
        console.log("Puede votar");
    }
    else{
        console.log("Muy joven para votar")
    }

    let result = (edad >= 18)? "Puede votar" : "Muy joven para votar";
    console.log(result);
}


//Verificar que una variable sea un numero NAN(Not a number)
