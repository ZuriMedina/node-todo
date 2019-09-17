const description = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completed = {
    default: true,
    alias: 'c',
    desc: 'Marcar como completada la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear tarea', {
        description
    })
    .command('actualizar', 'Actualizar tarea', {
        description,
        completed
    })
    .command('borrar', 'Borrar tarea', {
        description
    })
    .help() //Imprime el texto de ayuda del comenado "listar"
    .argv;

module.exports = {
    argv
}