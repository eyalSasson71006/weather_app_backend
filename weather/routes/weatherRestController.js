const express = require("express");
const { handleError } = require("../../utils/handleErrors");
const { getWeather } = require("../services/weatherApiService");
const normalizeWeather = require("../../helpers/normalizeWeatherObj");

const router = express.Router();

router.get("/:location", async (req, res) => {
    try {
        const { location } = req.params;
        const data = await getWeather(location);
        res.send(normalizeWeather(data));
    } catch (error) {
        handleError(res, error.status || 400, error.message);
    }
});

module.exports = router;