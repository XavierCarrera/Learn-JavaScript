// var xavier = {
//     nombre: "Xavier",
//     apellido: "Carrera",
//     edad: 30,
//     peso: 90
// }

// console.log(`Al inicio del año ${xavier.nombre} pesa ${xavier.peso}kg`)

// const INCREMENTO_PESO = 0.3
// const DIAS_AÑO = 365

// const aumentarPeso = persona => persona.peso += INCREMENTO_PESO
// const adelgaza = persona => persona.peso -= INCREMENTO_PESO
// const comeMucho = () => Math.random() < 0.3
// const haceDeporte = () => Math.random() < 0.4
    

// for (var i = 1; i <= DIAS_AÑO; i++) {
//     var random = Math.random()
//     if (random < 0.25) {
//         aumentarPeso(xavier)
//     } else if (random > 0.5) {
//         adelgaza(xavier) 
//     }
// }

// console.log(`Al final del año ${xavier.nombre} pesa ${xavier.peso.toFixed(1)}kg`)

// const META = xavier.peso - 3
// var dias = 0

// while (xavier.peso > META) {
    
//     if (comeMucho()) {
//         aumentarPeso(xavier)
//     } 
//     if (haceDeporte()) {
//         adelgaza(xavier)
//     }
//     dias += 1
// } 


// console.log(`Pasaron ${dias} dias hasta que ${xavier.nombre} adelgazó 3 kgs`)

// var contador = 0

// const llueve = () => Math.random() > 0.25

// do {
//     contador++
// } while (!llueve())

// if (contador < 2){
//     console.log(`Fuí a ver si llovía ${contador} vez`)
// } else {
//     console.log(`Fuí a ver si llovía ${contador} veces`)
// }

var signo = prompt("¿Cuál es tu signo?")

switch (signo) {
    case "aries":
        console.log("Eres buena onda")
        break
    case "tauro":
        console.log("También eres buena onda")
        break
    case "geminis":
    case "géminis":
        console.log("Tu caes mal")
        break
    default:
        console.log("Lo siento, no tengo tu signo")
        break
}