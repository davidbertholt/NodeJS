/** 
 * Await
 * Hace que Js espere hasta tener la respuesta de la promesa
 * Siempre debe estar dentro de un ASYNC function
 * 
 * Async 
 * Hace que la funcion sea asincrona haciedo que retonre una promesa
 * RETORNA UNA PRMESA!
 * 
 * **/

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

const getInfoUsuario = async (id) => {
    let respuesta = ''
    try {
        const empleado = await getEmpleado(id)
        const salario = await getSalario(id)
    
        return `El salario del empleado ${empleado} es ${salario}`;
    } catch (error) {
        throw 'ERROR!'; // Para que lo maneje el catch
        // return 'ERROR!';
    }
}

const id = 5;

getInfoUsuario(id)
    .then(console.log)
    .catch(console.log)


