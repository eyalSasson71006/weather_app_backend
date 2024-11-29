const locationValidation = require("./schemas/locationSchema");

const validateLocation = (location) => {
        const { error } = locationValidation(location);
        if (error) return error.details[0].message;
        return "";
};

module.exports = { validateLocation };