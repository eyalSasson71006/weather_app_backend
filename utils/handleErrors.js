const chalk = require("chalk");

const createError = (errorObj, validator = "", status = null) => {
    errorObj.message = `${validator}${errorObj.message}`;
    errorObj.status = status || errorObj.status || 400;
    throw new Error(errorObj);
};

const handleError = (res, status, message = "") => {
    console.log(chalk.redBright(message));
    return res.status(status).send(message);
};

module.exports = { createError, handleError }


