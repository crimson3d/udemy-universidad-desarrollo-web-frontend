function miFuncion1(){
    console.log('funcion 1')
}

function miFuncion2(){
    console.log('funcion 2')
}

miFuncion2();
miFuncion1();

//Funcion de tipo callback
function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallBack){
    let res = op1 + op2;
    funcionCallBack(`Resultado: ${res}`);
}

sumar(5, 3, imprimir);

//Llamadas asíncronas con uso setTimeout
function miFuncionCallBack(){
    console.log('saludo asíncrono después de tres segundos');
}

setTimeout(miFuncionCallBack, 3000);//después de 3 seg

setTimeout(function(){console.log('saludo asícrono 2')}, 5000);

setTimeout(() => console.log('saludo asíncrono 3'), 10000);