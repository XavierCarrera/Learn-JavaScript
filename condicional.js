var xavier = {
    nombre: "Xavier",
    apellido: "Carrera",
    edad: 18,
    dataScientist : true,
    cocinero: true,
    cantante: false,
    dj: false,
    guitarrista: true,
    pythonista: true
}

var pepito = {
    nombre: "Pepito",
    apellido: "López",
    edad: 15
}

const MAYOR_EDAD = 18

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`)

    if (persona.dataScientist) {
        console.log("Data Scientist")
    }   

    if (persona.cocinero) {
        console.log("Cocinero")
    }

    if (persona.cantante) {
        console.log("Cantante")
    }

    if (persona.dj) {
        console.log("DJ")
    } else {
        console.log("No es DJ")
    }

    if (persona.guitarrista) {
        console.log("Guitarrista")
    }

    if (persona.pythonista) {
        console.log("Pythonista")
    }
}

const mayorEdad = function (persona){
    if (persona.edad >= MAYOR_EDAD){
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
} 

const imprimirMayorEdad = persona => persona.edad >= MAYOR_EDAD

function permitirAcceso(persona) {
    if (!imprimirMayorEdad(persona)) {
        console.log("Acceso denegado")
    }
}

imprimirProfesiones(xavier)
mayorEdad(pepito)
imprimirMayorEdad(xavier)