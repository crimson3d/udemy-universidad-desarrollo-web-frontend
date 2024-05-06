//Hoisting: da igual cuando se declare una función, se puede utilizar llamar antes de declararla.
miFuncionSuma(5, 2);

//Declaración de la función
function miFuncionSuma(a, b){
    console.log(arguments.length);
    console.log("Suma: " + (a + b))
}

//Llamando a la función
miFuncionSuma(4, 7);

//Palabra Return en funciones
function miFuncionResta(a, b){
    return a - b;
}

let resultado = miFuncionResta(4, 2);
console.log(resultado);

//Funciones de tipo expresión o anónimas
let x = function (a, b){return a + b};

resultado = x(1, 2);
console.log(resultado);

//Funciones Self Invoking
(function (a, b){
    console.log("Ejecutando la función: " + (a + b));
})(3, 4);

//Funciones como objetos

console.log(typeof miFuncionResta);

var miFuncionTexto = miFuncionResta.toString();
console.log(miFuncionResta);