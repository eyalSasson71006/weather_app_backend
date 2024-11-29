require('dotenv').config();
const axios = require('axios');

const WEATHER_API_URL = process.env.WEATHER_API_URL;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

const weatherClient = axios.create({
    baseURL: WEATHER_API_URL,
    params: {
        key: WEATHER_API_KEY,
    },
    headers: {
        Accept: 'application/json',
    },
    timeout: 5000,
});

module.exports = weatherClient;
