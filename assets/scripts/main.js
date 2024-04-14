const menor = 1;
const maior = 1000;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio (){
    return parseInt(Math.random() * maior + 1)
}

console.log('Número secreto:', numeroSecreto)

const elementoMenor = document.getElementById('menor');
elementoMenor.innerHTML = menor;

const elementoMaior = document.getElementById('maior');
elementoMaior.innerHTML = maior;
