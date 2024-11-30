const Joi = require("joi");

const locationValidation = (location) => {
    const schema = Joi.string()
        .trim()
        .min(2)
        .max(255)
        .required()
        .messages({
            "string.empty": "Location is required.",
            "any.required": "Location is a mandatory field.",
            "string.min": "City name must be at least 2 characters long",
            "string.max": "City name can be at most 50 characters long",
        });
    return schema.validate(location);
};

module.exports = locationValidation;