let mes = 2;
let estacion = "Estación Desconocida";

switch(mes){
    case 1: case 2: case 12:
        estacion = "invierno";
        break;
    case 3: case 4: case 5:
        estacion = "primavera";
        break;
    case 6: case 7: case 8:
        estacion = "verano";
        break;
    case 9: case 10: case 11:
        estacion = "otoño";
        break;
    default:
        estacion = "Valor incorrecto";
}

console.log(estacion);

