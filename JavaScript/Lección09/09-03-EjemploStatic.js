


class Persona{

    static contadorPersonas = 0;//atributo de nuestra clase

    static get MAX_OBJ(){
        return 5;
    }

    email = "default email";//atributo de nuestros objetos

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorPersonas < Persona.MAX_OBJ){
        this.idPersona = ++Persona.contadorPersonas;
        }
        else {
            console.log("Se han superado el máximo de objetos permitidos")
        }
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return this.idPersona + " " + this._nombre + " " + this._apellido;
    }
    //Sobreescribiendo el metodo de la clase Padre (Object)
    toString(){
        //Se aplica polimorfismo (multiples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si es una referencia de tipo padre o de tipo hijo
        return this.nombreCompleto();
    }

    static saludar(){
        console.log("Saludos desde método Static");
    }

    static saludar2(persona){
        console.log(persona.nombre);
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);//llamar al constructor de la clase padre
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }
    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ", " + this._departamento;
    }
   
}

let persona1 = new Persona("Juan", "Perez");
console.log(persona1.toString());

let empleado1 = new Empleado("German", "Jimenez", "Sistemas");
console.log(empleado1.toString());

console.log(Persona.contadorPersonas);

console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ);

let empleado2 = new Persona("May", "Vazquez");
let empleado3 = new Persona("Armando", "Toledo");
let empleado4 = new Persona("Chachito", "Feliz");
let empleado5 = new Persona("Chachito", "Triste");
console.log(Persona5);