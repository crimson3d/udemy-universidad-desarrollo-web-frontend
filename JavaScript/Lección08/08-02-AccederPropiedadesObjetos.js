
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

console.log(persona["nombre"]);

//for in
for(nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad])
}

//agregar propiedad a objeto

persona.tel = "679543212";
persona.tel = "666666666";

console.log(persona);

delete persona.tel

console.log(persona);

//distintas formas de imprimir propiedades de objeto (en navegadores web no vemos la misma info que en vscode
//concatenar cada valor de cada propiedad

console.log(persona.nombre + " " + persona.apellido);

//for in

for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad])
}

let personaArray = Object.values(persona);
console.log(personaArray);

let personaString = JSON.stringify(persona);
console.log(personaString);

