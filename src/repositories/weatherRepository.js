const config = require('../config');
const axios = require('axios');
const logger = require('../loaders/logger');

class WeatherRepository {

    constructor() {
        this.units = 10;
        this.lang = 'es';
        this.basePath = config.openweathermap.basePath;
        this.appid = config.openweathermap.apikey;
    }

    async weatherByCoordinates(lon, lat) {

        try {
            const instance = axios.create({
                baseURL: `${this.basePath}`,
                params: {
                    'appid': this.appid,
                    'units': this.units,
                    'lang': this.lang,
                    lon,
                    lat
                }
            });

            const response = await instance.get();

            return response.data;

        } catch (err) {
            throw err;
        }
    }
}
module.exports = WeatherRepository;