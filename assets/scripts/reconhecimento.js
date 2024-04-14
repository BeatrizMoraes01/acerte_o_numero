window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recongnition = new SpeechRecognition();
const elementoChute = document.getElementById('chute');

//começa reconhecimento de voz
recongnition.lang = 'pt-br'

recongnition.start();

//evento que faz o que fala aparecer no console
recongnition.addEventListener('result', fala);

function fala (e) {
    const chute = e.results[0][0].transcript
    console.log(chute)
    mostrarNaTela(chute)
}

function mostrarNaTela (chute){
    elementoChute.innerHTML = `<div>Você disse:</div>
    <span class="box">${chute}</span>`
}