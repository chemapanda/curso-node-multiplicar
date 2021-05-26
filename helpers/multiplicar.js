const fs = require('fs')
require('colors')

const crearArchivo = async (base = 5, listar, hasta) => {

    try{
        let salida = '';
        let consola = ''
        for(let i =1; i<=hasta; i++){
            consola += (`${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`)
            salida += (`${base} ${'x'} ${i} ${'='} ${base * i}\n`)
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        if(listar){
            console.log(consola);
        }
        return `tabla-${base}.txt se ha creado`
    } catch(err) {
        throw  err
    }




}

module.exports = {
    crearArchivo
}