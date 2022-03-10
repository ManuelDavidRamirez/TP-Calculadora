const process = require("process")

const sumar = require("./sumar")
const restar = require("./restar")
const multiplicar = require("./multiplicar")
const dividir = require("./dividir")

const operacion = process.argv[2]
const NumeroA = +process.argv[3]
const NumeroB = +process.argv[4]

if (process.argv[4] === undefined) {
    console.log("digitos insuficientes")
}

if (operacion === "sumar") {
    console.log(sumar(NumeroA, NumeroB))
}else if(operacion === "restar") {
    console.log(restar(NumeroA, NumeroB))
}else if(operacion === "multiplicar") {
    console.log(multiplicar(NumeroA, NumeroB))
}else if(operacion === "dividir") {
    console.log(dividir(NumeroA, NumeroB))  
}else{
    console.log("no hay operacion disponible todavia")
}