//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let campoNome = document.getElementById('amigo');
let textoErro = document.getElementById('error');
let listaAmigos = document.getElementById('listaAmigos');
let listaSorteados = document.getElementById('resultado');
let sorteado = false;
let arrayNomes = [];

function RNG(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

function itemLista(item) {
    return `<li>${item}</li>`
}

function adicionarAmigo() {
    let nome = campoNome.value;
    if (nome != '' && !arrayNomes.includes(nome)) {
        sorteado = false;
        listaSorteados.innerHTML = '';
        listaAmigos.innerHTML += itemLista(nome);
        arrayNomes.push(nome);
        // console.log(arrayNomes);
        campoNome.value = '';
        erro('');
        return;
    }
    let diff = arrayNomes.includes(nome) ? ' diferente' : '';
    erro(`Por favor, insira um nome${diff}.`);
}

function sortearAmigo() {
    if (arrayNomes.length > 0 && !sorteado.valueOf()) {
        sorteado = true;
        erro('');
        listaAmigos.innerHTML = '';
        listaSorteados.innerHTML += itemLista(arrayNomes[RNG(0, arrayNomes.length - 1)]);
        arrayNomes = [];
        return;
    }
    erro('Por favor, insira um nome.');
}

function erro(text) {
    textoErro.innerHTML = text;
}