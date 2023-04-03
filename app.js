const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const PORT = 3200;
const app = express();
require('./models/imageMetaData')

require("dotenv").config();
app.use(bodyParser.json());

try {
  mongoose.connect(process.env.DB_CONNECT_SERVER, {useNewUrlParser: true, useUnifiedTopology: true});
  console.log("Mongo Connected");
} catch (error) {
  console.log(err);
}

// default route
app.get("/", async (req, res) => {
  return res.json({ status: 1 });
});

app.use("/", require("./routes/all_s3_apis"));

app.listen(PORT, () => {
  console.log(`Web Server running on port ${PORT}`);
});
