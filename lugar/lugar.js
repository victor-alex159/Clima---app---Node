const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedURL = encodeURI(dir); // transforma caracteres espciales a normal
    //console.log(encodedURL);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        //timeout: 1000,
        headers: { 'x-rapidapi-key': 'eb56b18d5fmsh2df08894a1e9fc6p1a564djsn359da0b94aa0' }
    });
    const resp = await instance.get();
    if (resp.data.Results.lenngth === 0) {
        throw new Error(`No hay resultados para  ${dir}`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}
module.exports = {
    getLugarLatLng
}