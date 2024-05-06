let hora = 23;
let estado;

if(hora >= 0 && hora <=6){
    estado = "Durmiendo";
}
else if(hora >= 6 && hora <=11){
    estado = "Buenos días";
}
else if(hora >= 12 && hora <= 18){
    estado = "Buenas tardes";
}
else if(hora >= 19 && hora <= 24){
    estado = "Buenas noches"
}
else{
    estado = "Hora incorrecta"
}

console.log(estado);