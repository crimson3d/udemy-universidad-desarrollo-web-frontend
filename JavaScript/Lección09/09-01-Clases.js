//NO es posible crear objetos antes de declarar la clase
//NO se aplica el concepto de hoisting (al contrario que en las funciones)
let persona3 = new Persona("Lara", "Vazquez");

class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
}

let persona1 = new Persona("Juan", "Perez");
console.log(persona1.nombre)
persona1.nombre = "Juan Carlos";
console.log(persona1);

let persona2 = new Persona("Carlos", "Lara");
console.log(persona2);