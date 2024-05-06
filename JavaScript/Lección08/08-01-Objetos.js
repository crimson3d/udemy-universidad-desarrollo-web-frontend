let x = 10;
console.log(x.length);

let persona = {
    nombre: "Jose",
    apellido: "Sanchez",
    email: "crimson@mail.com",
    edad: 30,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido
    }
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.nombreCompleto());

console.log(persona);

//Crear nuevo objeto con palabra reservada "new"

let persona2 = new Object();
persona2.nombre = "Carlos";
persona2.dirección = "Saturno 15";
persona2.telefono = "678345666";

console.log(persona2.telefono);