const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertySchema = new Schema(
  {
    image: {
      type: String,
    },
    availability: {
      type: String,
      required: [true, "Mode of sale or rent is required"],
      enum: ["sale", "rent"],
    },
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
    },
    bedrooms: {
      type: Number,
      required: [true, "No of Bedroom required"],
    },
    bathrooms: {
      type: Number,
      required: [true, "No of Bathrooms required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    squareMeter: {
      type: Number,
      required: [true, "Square Meter is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Property", propertySchema);
