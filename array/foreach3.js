const notas = [1,24,56,78,4,3,45,]

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

// in mostra os indices; of mostra os valores

