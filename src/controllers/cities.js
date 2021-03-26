const express = require('express');
const Success = require('../helper/succesHelper');
const { findCities } = require('../services/cityService');



/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const cities = async (req, res) => {
    const cities = await findCities(req.params.city);
    const success = new Success(cities);

    res.json(success);
};


module.exports = {
    cities,
}
