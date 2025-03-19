//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

function RNG(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

let campoNome = document.getElementById('amigo');
let textoErro = document.getElementById('error');
let listaAmigos = document.getElementById('listaAmigos');
let listaSorteados = document.getElementById('resultado');
let sorteado = false;

let arrayNomes = [];

listaAmigos.innerHTML = '';

function adicionarAmigo() {
    let nome = campoNome.value;
    if (nome != '') {
        if (!arrayNomes.includes(nome)) {
            listaAmigos.innerHTML += `<li>${nome}</li>`;
            arrayNomes.push(nome);
            console.log(arrayNomes);
            campoNome.value = '';
            textoErro.innerHTML = '';
        } else {
            textoErro.innerHTML = 'Por favor, insira um nome diferente.';
        }
    } else {
        textoErro.innerHTML = 'Por favor, insira um nome.';
    }
}

function sortearAmigo() {
    if (arrayNomes.length > 0 && !sorteado.valueOf()) {
        sorteado = true;
        textoErro.innerHTML = '';
        let max = arrayNomes.length - 1;
        listaAmigos.innerHTML = '';
        listaSorteados.innerHTML += `<li>${arrayNomes[RNG(0,max)]}</li>`;
        arrayNomes = [];
    } else {
        textoErro.innerHTML = 'Por favor, insira um nome.';
    }
}