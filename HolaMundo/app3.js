console.log('inicio del programa');

setTimeout(() => {
    console.log('timeout 1');
}, 3000);

setTimeout(() => {
    console.log('timeout 2');
}, 0);

setTimeout(() => {
    console.log('timeout 3');
}, 0);

console.log('Fin del programas');