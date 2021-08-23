// ESTO ESTA HECHO CON EL FIN DE DEMOSTRAR QUE ES UN LIO

const salarios = [
    {
        id: 1,
        salario: 2500
    },
    {
        id: 2,
        salario: 3000
    }
];

const getSalario = (id, callback) => {
    const salario = salarios.find(s => s.id === id)?.salario;
    
    if(salario) {
        callback(null, salario);
    } else {
        callback(`el salario ${id} no existe`)
    } 
}

const id = 1;

getSalario(id, (err, salario) => {
    if (err) {
        console.log('ERROR');
        console.log(err)
    }

    console.log('Empleado existe!');
    console.log(salario)
})
