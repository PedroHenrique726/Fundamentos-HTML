function hello() {
    // escopo local
    alert("Hello World!")
}

let nome = document.getElementById("nome");

function enviar(){
    alert("Ola " + nome.value);
}