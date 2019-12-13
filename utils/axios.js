const axios = require('axios').default;
module.exports = axios.create({
    baseURL:"https://horoscope-api.herokuapp.com/horoscope/today/"
})