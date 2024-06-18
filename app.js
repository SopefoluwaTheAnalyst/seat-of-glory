const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/about", function(req, res){
    res.sendFile(__dirname + "/about.html");
});

app.get("/services", function(req, res){
    res.sendFile(__dirname + "/services.html");
})

app.get("/events", function(req, res){
    res.sendFile(__dirname + "/events.html");
})

app.use(express.static("public"));



// app.listen(3000, function(req, res){
//     console.log("server is rinning on port 3000");
// });

const port = process.env.PORT || 3000;
const server = app.listen(port, function(req, res){
    console.log("server is rinning on port 3000");
});