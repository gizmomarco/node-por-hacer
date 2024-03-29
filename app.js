const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');
let comando = argv._[0];
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        console.log('========Por hacer========'.yellow);
        for (let tarea of listado) {
            console.log(tarea.descripcion);
            console.log('Estado:', colors.red(`${tarea.completado}`));
            console.log('========================='.yellow);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'eliminar':
        let eliminado = porHacer.eliminar(argv.descripcion);
        console.log(eliminado);
        break;
    default:
        console.log('Comando no definido');
        break;
}