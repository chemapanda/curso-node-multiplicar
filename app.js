const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')
require('colors')

console.clear()


crearArchivo(argv.base, argv.l, argv.h)
    .then(msg => console.log(msg.blue))
    .catch((err) => {
        console.log('TODO MAL!!!!!'.red)
        console.log(err)
    })
