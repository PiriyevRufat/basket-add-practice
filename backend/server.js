const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const CategoriesRouter = require("./routes/Categories.routes");
const app = express();
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use("/api/categories", CategoriesRouter);
mongoose
  .connect("mongodb+srv://Rufat:rufat205@cluster0.46jysgg.mongodb.net/")
  .then(() => {
    console.log("connected");
  });

app.listen(8080, () => {
  console.log("server running on 8080");
});
