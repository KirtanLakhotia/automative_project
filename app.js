const express = require("express");
const app = express();


app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render("index");
});


app.post("/submit", function (req, res) {
    const numberPlate = req.body.numberPlate;
    console.log("Received Number Plate:", numberPlate);
    res.send(`You submitted the number plate: ${numberPlate}`);
});

app.listen(process.env.PORT||4000,function(){
    console.log("server is running at port 4000") ;
}) ;