const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea'
};
const completado = {
    alias: "c",
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea por hacer', {
        descripcion,
        completado
    })
    .command('eliminar', 'Eliminar una tarea por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = { argv }