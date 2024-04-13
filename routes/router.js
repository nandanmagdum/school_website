const express = require("express");

const rootDir = require("../utils/root_dir.js");
const path = require("path");
const rootDir = require("../utils/root_dir.js");

const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(rootDir, "public" , "index.html"));
});

module.exports = router;