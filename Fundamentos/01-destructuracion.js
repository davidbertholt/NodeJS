const deadepool = {
    nombre: 'Wade',
    apellido: 'Wilson',
    poder: 'Regeneracion',
    edad: 25
}

const extraerHeroe = ({nombre, apellido, poder, edad}) => {
    console.log(nombre)
    console.log(apellido)
    console.log(poder)
    console.log(edad)
}

extraerHeroe(deadepool)

const heroes = ['Deadpool', 'Superman', 'Batman'];

const [h1, h2, h3] = heroes;

console.log(h1)
console.log(h2)
console.log(h3)