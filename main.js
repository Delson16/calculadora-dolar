const valor = document.querySelector("#valor");
const display = document.querySelector("#display");
const button = document.querySelector("#btn")

button.addEventListener("click", function(){
    let valorAtual = parseInt(valor.value);
    let resultado = valorAtual * 5;

    display.value = resultado;
})

const dark = document.querySelector('#toggle');
const body = document.body;

dark.addEventListener("click", function(){
    body.classList.toggle("dark-mode");
})



