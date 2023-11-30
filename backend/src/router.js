const express = require("express");

const router = express.Router();

const itemRoutes = require("./routers/itemRoutes");
const thingRoutes = require("./routers/thingRoutes");

router.use("/things", thingRoutes);
router.use("/items", itemRoutes);

module.exports = router;
