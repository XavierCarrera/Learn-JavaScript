var xavier = {
    nombre: "Xavier",
    appellido: "Carrera",
    edad: 28
}

var dario = {
    nombre: "Dario",
    appellido: "Lopez",
    edad: 27
}

function imprimirMayusculas(persona) {
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

function saludo(persona){
    var { nombre } = persona
    var { edad } = persona
    console.log("Hola, me llamo " + nombre + " y tengo " + edad + " años")
}

saludo(xavier)
saludo(dario)
