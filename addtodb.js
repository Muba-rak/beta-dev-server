require("dotenv").config();
const PROPERTIES = require("./models/property");
const jsonProperty = require("./data.json");
const mongoose = require("mongoose");

const addPoperty = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, { dbName: "betaserver" });

    await PROPERTIES.create(jsonProperty);
    console.log("Properties added");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

addPoperty();
