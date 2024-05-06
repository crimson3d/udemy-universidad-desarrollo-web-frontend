//Funcion constructor de objetos de tipo Persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}

Persona.prototype.tel = "676666666";

let padre = new Persona("Juan", "Perez", "jp@mail.com");

console.log(padre.tel);

let madre = new Persona("Laura", "Vazquez", "lv@mail.com");

console.log(madre);

padre.nombre = "Carlos";

console.log(padre);
console.log(madre);

console.log(padre.nombreCompleto())
console.log(madre.nombreCompleto())

//distintas formas de crear objetos

let miObjeto = new Object();
let miObjeto2 = {};

let miCadena1 = new String("Hola");
let miCadena2 = "Hola";

let miNumero = new Number(1);
let miNumero2 = 1;

let miBoolean = new Boolean(false);
let miBoolean2 = false;

let miArray1 = new Array();
let miArreglo2 = [];

let miFuncion = new Function();
let miFuncion2 = function(){};
