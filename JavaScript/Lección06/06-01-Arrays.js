//declarar array: forma clásica (no recomendada)

let autos = new Array("bmw","mercedes","volvo");

//declarar array: forma actual

const consolas = ["xbox","playstation","switch"];

console.log(consolas);

//acceder a elementos del array

console.log(consolas[0]);
console.log(consolas[2]);

for(let i = 0; i < consolas.length; i++){
    console.log(i + " : " + consolas[i]);
}

//modificar elementos array

consolas[1] = "Steam Deck";
console.log(consolas[1]);

//agregar elementos a array

consolas.push("Super Nintendo");
console.log(consolas);

console.log(consolas.length);
consolas[consolas.length] = "Mega Drive";

console.log(consolas);

consolas[6] = "Playdate";
console.log(consolas); //así dejamos un espacio vacío, no recomendable ya que usa memoria igualmente

//preguntar si estamos trabajando con un array

console.log(typeof consolas);

console.log(Array.isArray(consolas));

console.log(consolas instanceof);