// ESTO TAMPOCO ESTA BIEN, PERO VA MEJORANDO

const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

const getEmpleado = ( id ) => {
    return new Promise((resolve, reject) => {
        // resolve se llama si todo OK, reject si todo mal
        const empleado = empleados.find( e => e.id === id )?.nombre;
        empleado
            ? resolve(empleado)
            : reject(`No existe empleado con id ${id}`);
    });
}

const getSalario = ( id ) => {
    return new Promise((resolve, reject) => {
        // resolve se llama si todo OK, reject si todo mal
        const salario = salarios.find( e => e.id === id )?.salario;
        salario
            ? resolve(salario)
            : reject(`No existe salario con id ${id}`);
    });
}

const id = 2;

getEmpleado(id)
    .then( empleado => {
            nombre = empleado;
            return getSalario(id)
    })
    .then( salario => 
        console.log(`El salario del empleado ${nombre} es ${salario}`))
    .catch(console.log)