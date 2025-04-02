require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRouter");
const propertyRouter = require("./routes/propertyRouter");

//middlewares
app.use(express.json());
app.use(cors());

//route
app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Beta Home Server" });
});
app.use("/api/v1", userRouter);
app.use("/api/v1/property", propertyRouter);

//error route
app.use((req, res) => {
  res.status(404).send("resource not found");
});

//db connection
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, { dbName: "betaserver" });
    app.listen(PORT, () => {
      console.log(`server running on port : ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
