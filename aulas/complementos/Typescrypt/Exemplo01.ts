let mensagem: string = "Hello World;"


console.log(`Mensagem: ${mensagem}`)

function multiplicador(valor: number) {
    return valor * 5
}

console.log(`Resultado: ${multiplicador(5)}`);


interface Pessoa {
    nome: string
    sobrenome: string
    idade: number;
}


let pessoa: Pessoa = {
    nome: 'Maria',
    sobrenome: 'Simões',
    idade: 23
}

let pessoa2: Pessoa = {
    nome: 'Juliana',
    sobrenome: "Paes",
    idade: 25
}

console.log(`${pessoa.nome} tem a idade de ${pessoa.idade}`);
console.log(`${pessoa2.nome} tem a idade de ${pessoa2.idade}`);

let valores: number[] = [1,2,3,4]

console.log(valores);
console.log(...valores);

valores.forEach(valor => console.log(valor));