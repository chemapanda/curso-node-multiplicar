const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type:'number',
        demandOption: true,
        describe: 'Indica la base de la tabla de multiplicar'
    })
    .option('l', {
        alias:'listar',
        type:'boolean',
        default: false,
        describe: 'Muestra la tabla de multiplicar'
    })
    .option('h',{
        alias:'hasta',
        type:'number',
        default: 10,
        describe: 'Establece el número de multiplicandos'
        })
    .check((argv)=>{
        if(isNaN(argv.b) || isNaN(argv.h)){
            throw 'La base y el número de multiplicandos tienen que ser un número'
        }
        return true
    })
    .argv;

module.exports = argv