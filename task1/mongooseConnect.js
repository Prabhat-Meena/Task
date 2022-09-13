const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/projectdb")
    .then(() => { console.log("connect succcessfully") })
    .catch((err) => { console.log(err) });