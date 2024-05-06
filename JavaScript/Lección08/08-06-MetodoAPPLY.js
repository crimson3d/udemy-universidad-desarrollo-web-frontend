let persona1 = {
    nombre: "Juan",
    apellido: "Perez",
    nombreCompleto: function(titulo, tel){
        return titulo + " " + this.nombre + " " + this.apellido + ", " + tel;
    }
}

let persona2 = {
    nombre: "Carlos",
    apellido: "Lara"
}

//Uso de apply para usar el metodo persona1.nombreCompleto con los datos de persona2
console.log(persona1.nombreCompleto("Lic", 9283749823));

let Array = ["Ing","679543245"];
console.log(persona1.nombreCompleto.apply(persona2, Array));
