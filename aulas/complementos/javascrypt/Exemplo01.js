let num = 3;

const textp = "Hello World"

let nome = "Pedro"

console.log(`Usuario Atual: ${nome}`)

console.log(`Soma: ${ num + 3}`)

function soma(numero1, numero2){
    return numero1 + numero2;
}

let somar = (numero1, numero2) => {
    return numero1 + numero2
}

console.log(`Somar: ${somar(6,5)}`);

function listar(x){
    console.log()
}

let numeros = [1, 2, 3, 4];

numeros.forEach((numero) => {
    console.log(numero)
});