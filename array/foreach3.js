const { nodeModuleNameResolver } = require("typescript");

const notas = [1,24,560,7]

for(let nota of notas) {
    console.log(nota)
};

let indice = '';
for(let notas2 in notas) {
    indice += notas2 + ' '
};

console.log(indice)

let valores = '';
for(let notas3 of notas) {
    valores += notas3 + ' ' // Mostra os valores do array em uma unica linha
};

console.log(valores)

// in mostra os indices dos valores; of mostra os valores do array

function praCadaElemento(elemento, indice, array) {
    console.log(elemento, indice, array)
} // mostra o elemento, o indice, e o array completo

notas.forEach(praCadaElemento)

notas.forEach(function (elemento) {
    console.log(elemento)
}) // mostra somento o elemento do array





