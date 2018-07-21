const express = require("express");
const app = express();
//const bodyParser = require("body-parser");

//app.use(bodyParser);

app.use(express.static("./static"));

// app.use("/",(req,res) => {
//     console.log("GET '/'");
//     res.send("hello");
// })

app.listen(8080, () => {
    console.log("Running on 8080");
});