// //Tipo primitivo
// let x = 10;

// function cambiarValor(a){
//     a = 20;
// }


// //Paso por valor
// cambiarValor(x);//10
// console.log(x);
// console.log(a);


//Crear objeto, variable persona almacena los atributos como objeto
const persona = {
    nombre: "Jose",
    apellido: "Sanchez"
}

function cambiarValorObjeto(p1){
    p1.nombre = "Carlos";
    p1.apellido = "Lara";
}
//Paso por referencia
cambiarValorObjeto( persona );
console.log( persona );