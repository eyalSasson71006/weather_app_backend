const { createError } = require("../../utils/handleErrors");
const weatherApiClient = require("../clients/weatherApiClient");
const { validateLocation } = require("../validation/locationValidationService");

const getWeather = async (location) => {
    try {
        const error = validateLocation(location);
        if (error){
            let errorObj = new Error(error);
            return createError(errorObj, `Joi Error: `);
        }

        const response = await weatherApiClient.get("/forecast.json", {
            params: {
                q: location,
            }
        });
        return response.data;
    } catch (error) {        
        let errorObj = new Error(error.response?.data?.error?.message || error.message);
        createError(errorObj);
    }
};

const getLocations = async (location) => {
    try {
        const error = validateLocation(location);
        if (error) {
            let errorObj = new Error(error);
            return createError(errorObj, `Joi Error: `);
        }

        const response = await weatherApiClient.get("/search.json", {
            params: {
                q: location,
            }
        });
        return response.data;
    } catch (error) {
        let errorObj = new Error(error?.response?.data?.error?.message || error.message);
        createError(errorObj);
    }
};

module.exports = { getWeather, getLocations };