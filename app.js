const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');


console.log(argv);

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.description);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('===========Por Hacer=========='.green);
            console.log(tarea.description);
            console.log('Estado: ', tarea.completed);
            console.log('================'.green);

        }
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.description, argv.completed);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.description);
        console.log(borrado);
        break;

    default:
        console.log('Comando no es reconocido');

}