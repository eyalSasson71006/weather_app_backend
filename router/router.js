const express = require("express");
const { handleError } = require("../utils/handleErrors");

const router = express.Router();

router.use("/weather", weatherRestController);

router.use((req, res) => {
    handleError(res, 404, "Path not found");
});

module.exports = router;