let resultado = sumarTodo(5,4,13,10,9);

function sumarTodo(){
    let suma = 0;
    for (let index = 0; index < arguments.length; index++){
        suma += arguments[index];
    }
    return suma;
}

console.log(resultado);