// Ejemplo AND (&&), regresa true solo si ambos operandos son true
let a = 5;
let valMin = 0;
let valMax = 10;

if(a >= valMin && a <=10){  
    console.log("Dentro de rango");
}
else{
    console.log("Fuera de rango");
}


// Ejemplo OR (||), regresa true si cualquier operando es true

let vacaciones = false, diaDescanso = true;

if (vacaciones || diaDescanso){
    console.log("Padre puede asistir al juego del hijo");
}
else{
    console.log("El padre está ocupado")
}