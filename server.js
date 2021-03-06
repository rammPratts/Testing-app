const express = require("express");
const hbs = require("hbs");

const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

// mantenimiento xd
// app.use((req,res,next) =>{
//     res.render("mantenimiento.hbs");
// })

app.get("/",(req,res) =>{
    res.render("home.hbs",{
        pageTitle: "This is my page",
        welcomeMessage: "Hola! Este es mi página web :)",
        currentYear: new Date().getFullYear()
    })
});

app.get("/bad",(req,res)=>{
    res.send({
        errorMessage: "No se pudo completar la acción."
    })
});

app.listen(port, () =>{
    console.log("Serever is up on port"+port);
});