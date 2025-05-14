const axios = require('axios');

const BASE_URL = "http://api.weatherapi.com/v1/current.json";
const WEATHER_API_KEY = '7c197a141b654d289e645839252904';

exports.getCurrentWeather = async (req, res) => {
    const city = 'bangkok';
    try {
        const result = await axios.get(`${BASE_URL}?key=${WEATHER_API_KEY}&q=${city}&aqi=no`);
        res.json(result.data);
    } catch (err) {
        console.error('Error getting weather API', err); // Fixed the error variable name
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
};

