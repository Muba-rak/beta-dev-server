const router = require("express").Router();

const {
  handleGetAllProperties,
  getSingleProperty,
} = require("../controller/propertyController");
router.get("/", handleGetAllProperties);
router.get("/:propertyId", getSingleProperty);
module.exports = router;
