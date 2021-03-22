let valor = 0

function s() {
    switch (valor) {
        case (3):{
            --valor
            console.log(valor)
            break}
        case 4:{
            valor -= 2
            console.log(valor)
            break}
        case 1:{
            ++valor
            console.log(valor)
            break}
        case 0:{
            valor += 2
            console.log(valor)
            break}
        case 2:{
            console.log('Aprovado!')
            break}
        case 5:{
            console.log('Reprovado!')
            break}
        default: console.log('Sem valor')
                        
}
}

s()

let fov = 5
for (;fov < 10; ) {

}