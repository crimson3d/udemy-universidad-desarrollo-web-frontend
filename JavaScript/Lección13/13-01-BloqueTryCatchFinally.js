// 'use strict'
// try {
//     let x = 10;
//     //miFuncion();
//     throw 'mi error';
// }
// catch(error){
//     console.log(error);
// }
// finally{
//     console.log('termina la revisión de errores')
// }

// console.log('continuamos...');


let resultado = '';

try{
    if (isNaN(resultado)) throw 'No es un número';
    else if(resultado === '') throw 'Es cadena vacía';
    else if(resultado >= 0) throw 'Valor Positivo';
    else if(resultado <= 0) throw 'Valor Negativo';
}
catch(error){
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}