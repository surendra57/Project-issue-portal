const express = require("express");
const connectDB = require("./config/db");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");

//connect Database
connectDB();

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

//Routes Import
const project = require("./routes/projectRoute");

app.use("/api/v1/", project);

app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`);
});
