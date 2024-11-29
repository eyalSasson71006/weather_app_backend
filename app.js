const express = require("express");
const router = require("./router/router");
const chalk = require("chalk");
const { handleError } = require("./utils/handleErrors");
require("dotenv").config();

if (!process.env.PORT || !process.env.WEATHER_API_URL || !process.env.WEATHER_API_KEY) {
    throw new Error("Missing required environment variables.");
}

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(router);

app.use((err, req, res, next) => {
    const message = err || "internal error of the server";
    handleError(res, 500, message);
});

app.listen(PORT, () => {
    console.log(chalk.yellow("server is listening to port " + PORT));
});