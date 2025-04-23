const Property = require("../models/property");
const handleGetAllProperties = async (req, res) => {
  const { location, bedrooms, sort, title } = req.query;

  const page = parseInt(req.query.page) || 1;
  const limit = 9;
  const queryObject = {};
  let result = Property.find(queryObject);
  if (location) {
    queryObject.location = { $regex: location, $options: "i" };
  }

  if (bedrooms) {
    queryObject.bedrooms = { $eq: Number(bedrooms) };
  }
  if (title) {
    queryObject.title = { $regex: title, $options: "i" };
  }
  if (sort) {
    result = result.sort(`${sort} -createdAt`);
  } else {
    result.sort("-createdAt");
  }

  const skip = (page - 1) * limit;
  result = result.find(queryObject).sort("-createdAt").skip(skip).limit(limit);
  try {
    const totalProperties = await Property.countDocuments(queryObject);
    const totalPages = Math.ceil(totalProperties / limit);
    const properties = await result;
    res.status(200).json({
      success: true,
      currentPage: page,
      totalPages,
      totalProperties,
      numOfProperties: properties.length,
      properties,
    });
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};
const getSingleProperty = async (req, res) => {
  const { propertyId } = req.params;
  const property = await Property.findById(propertyId);
  res.status(200).json({ success: true, property });
};

module.exports = { handleGetAllProperties, getSingleProperty };
