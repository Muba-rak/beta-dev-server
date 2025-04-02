const router = require("express").Router();

const handleGetAllProperties = require("../controller/propertyController");
router.get("/", handleGetAllProperties);
module.exports = router;
