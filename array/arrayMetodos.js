const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona um novo elemento na ultima posição do array
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona um novo elemento na primeira posição do array
console.log(pilotos)

// splice pode adicionar e remover elementos do array

// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// Remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.splice(2) // Retorna um novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Não retorna o 4
console.log(algunsPilotos2)

let valores = [1,2,3,4,5,67,89] 

console.log(valores.indexOf(67)) // mostra o indice do valor

console.log(valores.includes(67)) // verifica se o valor existe no array

console.log(valores.join(' - ')) // adiciona qualquer coisa entre os após cada valor  

spread = ['var', 123]
console.log(spread)