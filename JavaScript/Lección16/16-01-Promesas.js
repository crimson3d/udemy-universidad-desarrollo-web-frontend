let miPromesa = new Promise((resolved, rejected) => {
    let expresion = true;
    if(expresion){
        resolved('Resolvió correcto');
    }else{
        rejected('Se produjo un error');
    }
});

// miPromesa.then(
//     valor => console.log(valor),
//     error => console.log(error)
// )

// miPromesa
// .then(valor => console.log(valor))
// .catch(error => console.log(error));


let promesa = new Promise((resolved) => {
    setTimeout(() => resolved('saludos conpromesa y timeout'), 3000)
    //console.log('fin promesa');
});

//promesa.then(valor => console.log(valor));

//async indica que una función regresa una promesa

async function miFuncionConPromesa(){
    return 'saludos con promesa y async'
}

//miFuncionConPromesa().then(valor => console.log(valor));

//async/await
async function funcionConPromesaYAwait(){
    let miPromesa = new Promise(resolved => {
        resolved('Promesa con await');
    });

    console.log(await miPromesa);
}

//funcionConPromesaYAwait();

//promesas, await, async y setTimeout
async function funcionConPromesaAwaitTimeout(){
    console.log('inicio de función');
    let miPromesa = new Promise(resolved => {
        setTimeout(() => resolved('promesa con await y timeout'), 5000);
    })
    console.log(await miPromesa);
    console.log('fin de función');
};

funcionConPromesaAwaitTimeout();