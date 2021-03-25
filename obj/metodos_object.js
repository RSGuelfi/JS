let objeto = {
    nomes: {
        name: 'Ab',
        sub: 'Define'    
    },
    date: '12/34/54'
}

console.log(objeto.nomes, objeto.date)

let objext = { string: 'p=11', num: 12}
let objext2 = { string: 'p+1', num: 12, num2: 1} 

let objextclone = {...objext} // ... é usado para clonar arrays/objects em um só array/object

let objextmerge = {...objext,...objext2,...objeto}

console.log(objextmerge)