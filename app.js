const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({ // options recibe objetos
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

/* lugar.getLugarLatLng(argv.direccion)
    .then(console.log);

clima.getClima(-5.710000, -79.279999)
    .then(resp => {
        console.log('Temperatura', resp);
    })
    .catch((err) => {
        console.log(err);
    }) */

/* lugar.getLugarLatLng(argv.direccion).then(ciudad => {
    clima.getClima(ciudad.lat, ciudad.lng).then(resp => {
        console.log(`La temperatua de la ciudad "${ciudad.direccion}" es de ${resp}`);

    }, (err) => {
        console.log(err);
    })
}, (err) => {
    console.log(err);
}) */

const getInfo = async(dir) => {
        try {
            const lugar_ciudad = await lugar.getLugarLatLng(dir);
            const temp_ciudad = await clima.getClima(lugar_ciudad.lat, lugar_ciudad.lng);
            return `El clima de ${lugar_ciudad.direccion} es de ${temp_ciudad}`;

        } catch (error) {
            return `No se pudo determinar el clima de ${lugar_ciudad.direccion}`;
        }
    }
    /* 
    getInfo(argv.direccion)
        .then(mensaje => {
            return console.log(mensaje);
        })
        .catch(err => {
            return console.log(`No se pudo determinar el clima de ${lugar_ciudad.direccion}`);
        }); */
getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);

//console.log(argv.direccion);