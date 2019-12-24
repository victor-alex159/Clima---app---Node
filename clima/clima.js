const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=20f6c83ff78e5e1dae4fa67f96395cef&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}