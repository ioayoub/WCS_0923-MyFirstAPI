const express = require("express");

const router = express.Router();

const { browse } = require("../controllers/thingControllers");

router.get("/", browse);

module.exports = router;
