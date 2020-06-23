// Requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    console.log('================'.green);
    console.log(`= Tabla del ${base} =`.green);
    console.log('================'.green);

    for (let index = 1; index <= limite; index++) {
        let res = base * index;
        console.log(`${base} * ${index} = ${res}`);
    }
};

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un numero`);
            return;
        }

        let data = '';

        for (let index = 1; index <= limite; index++) {
            let res = base * index;
            data += `${ base } * ${ index } = ${ res }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }-al-${limite}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}