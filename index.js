const express = require("express");
const app = express();
const bodyParser =  require("body-parser");

const productcontroller = require("./src/product/ProductController");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/", productcontroller);

app.get("/", (req,res) =>{
        res.sendStatus(404);
})

app.listen(4040, () =>{
    console.log("API INICIADA PORTA: 4040")
})