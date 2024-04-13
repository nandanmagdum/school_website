const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose  = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const rootDir = require("./utils/root_dir.js");
const path = require("path");

const app = express();

// default middlewares
app.use(express.static(path.join(rootDir, "public")));
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// connect to mongoDB
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("mongoDB Atlas connnected");
})
.catch((error) => {
    console.error(error.message);
});

// routes
// app.use("/", viewRouter);

app.listen(3000, () => {
    console.log("Server is running at port 3000")
})