
/Así tenemos parámetros asignados y por eso nos da el resultado de la suma, al no pasar parámetros en la variable resultado estos se imprimen como undefined 
let x = function (a = 4, b = 5){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b
};

resultado = x();
console.log(resultado);

