const express = require('express')
    app = express()
    httpStauts = require("http-status-codes"),
    contentTypes = require("./content-types"),
    utils = require("./utils");
    port = 3000;

    app.use(express.static('public'));
    app.use(express.static('views'))

    app.get("/",(req,res) => {
        res.writeHead(httpStauts.OK, contentTypes.html);
        utils.getFile("views/index.html",res);
    });
    
    
    
    app.get("/courses.html",(req,res) => {
        res.writeHead(httpStauts.OK, contentTypes.html);
        utils.getFile("views/courses.html",res);
    });
    
    app.get("/contact.html",(req,res) => {
        res.writeHead(httpStauts.OK, contentTypes.html);
        utils.getFile("views/contact.html",res);
        
    });
    app.get("/index.html",(req,res) => {
        res.writeHead(httpStauts.OK, contentTypes.html);
        utils.getFile("views/index.html",res);
        
    });
    
    app.post("/submit", (req, res) => {
        res.writeHead(httpStauts.OK, contentTypes.html);
        utils.getFile("views/thanks.html", res);    
    });
    
    app.get("/graph.png",(req,res) => {
        res.writeHead(httpStauts.OK, contentTypes.png);
        utils.getFile("public/images/graph.png",res);
    });
    
    app.get("/people.jpg",(req,res) => {
        res.writeHead(httpStauts.OK, contentTypes.jpg);
        utils.getFile("public/images/people.jpg",res);
    });
    
    app.get("/product.jpg",(req,res) => {
        res.writeHead(httpStauts.OK, contentTypes.jpg);
        utils.getFile("public/images/product.jpg",res);
    });
    
    app.get("/",(req,res) => {
        res.writeHead(httpStauts.OK, contentTypes.css);
        utils.getFile("public/css/confetti_cuisine.css",res);
    });
    
    app.get("/bootstrap.css",(req,res) => {
        res.writeHead(httpStauts.OK, contentTypes.css);
        utils.getFile("public/css/bootstrap.css",res);
    });

    app.get("/css/home.css",(req,res) => {
        res.writeHead(httpStauts.OK, contentTypes.css);
        utils.getFile("public/css/home.css",res);
    });

    app.get("/css/contact.css",(req,res) => {
        res.writeHead(httpStauts.OK, contentTypes.css);
        utils.getFile("public/css/contact.css",res);
    });

    app.get("/js/script.js",(req,res) => {
        res.writeHead(httpStauts.OK, contentTypes.js);
        utils.getFile("public/css/confetti_cuisine.js",res);
    });
    
    app.get("/confetti_cuisine.js",(req,res) => {
        res.writeHead(httpStauts.OK, contentTypes.js);
        utils.getFile("public/css/confetti_cuisine.js",res);
    });

    app.get("/error.html",(req,res) => {
        res.writeHead(httpStauts.OK, contentTypes.html);
        utils.getFile("views/error.html",res);
    });
    
    
    
    
    
    app.listen(port, ()=>{
        console.log(`The server has started and is listening on port number: ${port}`);
    });
    