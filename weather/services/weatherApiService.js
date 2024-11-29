const { handleError } = require("../../utils/handleErrors");
const weatherApiClient = require("../clients/weatherApiClient");
const { validateLocation } = require("../validation/locationValidationService");

const getWeather = async (location) => {
    try {
        const error = validateLocation(location);
        if (error) return handleError(res, 400, `Joi Error: ${error}`);

        const response = await weatherApiClient.get("/forecast.json", {
            params: {
                q: location,
            }
        });
        return response.data;
    } catch (error) {
        handleError(res, error.status || 400, error.message);
    }
};

module.exports = { getWeather };