for(let contador = 0; contador < 3; contador++){
    console.log(contador);
}
console.log("Fin ciclo for");


// imprimir solo números pares y uso de break

for (let contador = 0; contador <= 10; contador++){
    if(contador % 2 == 0){
        console.log(contador);
        break;
    }
}
console.log("Fin del ciclo for")


// imprimir solo números impares y uso de continue
inicio:
for(let contador = 0; contador <= 10; contador++){
    if(contador % 2 == 0){
        continue inicio; //ir a la siguiente iteración
    }
        console.log(contador);
}