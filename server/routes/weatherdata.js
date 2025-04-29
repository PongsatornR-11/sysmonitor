const express = require('express')
const router = express.Router()

const { getCurrentWeather } = require('../controllers/weatherData')

router.get('/weather_data', getCurrentWeather)

module.exports = router