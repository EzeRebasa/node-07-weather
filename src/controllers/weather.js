const express = require('express');
const logger = require('../loaders/logger');
const Success = require('../helper/succesHelper');
const { weatherByCoordinates: weatherByCoordinatesService, weatherByCityId: weatherByCityIdService } = require('../services/weatherService');



/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const weatherByCoordinates = async (req, res) => {

    const { lon, lat } = req.query;
    const weather = await weatherByCoordinatesService(lon, lat);
    const success = new Success(weather);
    res.json(success);
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const weatherByCityId = async (req, res) => {
    logger.info(JSON.stringify(req.params));
    const { city, id } = req.params;
    const weather = await weatherByCityIdService(city, id);
    const success = new Success(weather);
    res.json(success);
};

module.exports = {
    weatherByCoordinates,
    weatherByCityId
}
