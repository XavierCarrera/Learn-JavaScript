// function heredaDe(prototipoHijo, prototipoPadre) {
//     var fn = function () {}
//     fn.prototype = prototipoPadre.prototype
//     prototipoHijo.prototype = new fn
//     prototipoHijo.prototype.constructor = prototipoHijo
// }

// function Persona(nombre, apellido, altura) {
//     this.nombre = nombre
//     this.apellido = apellido
//     this.altura = altura
// }

// Persona.prototype.saludar = function () {
//     console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
// }

// Persona.prototype.soyAlto = function () {
//     return this.altura > 1.8
// }

// function Desarollador(nombre, apellido) {
//     this.nombre = nombre
//     this.apellido = apellido
// }

// heredaDe(Desarollador, Persona)

// Desarollador.prototype.saludar = function (){
//     console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
// }

// var xavier = new Persona("Xavier", "Carrera", 1.73)
// var erika = new Persona("Erica", "Luna", 1.81)
// var arturo = new Persona("Arturo", "Garcia", 1.63)
// xavier.saludar()

// xavier.soyAlto 
// erika.soyAlto
// arturo.soyAlto

class Persona{
    constructor(nombre, apellido, estatura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.estatura = estatura;
    }

    saludar(){
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido} y mi estatura es de ${this.estatura}m.`);
    }

    soyAlto(){
        return this.estatura > 1.8;
    }
}

class Desarrollador extends Persona {

    saludar(){
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}, mi estatura es de ${this.estatura}m y soy desarrollador.`);
    }

}