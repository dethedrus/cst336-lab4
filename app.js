const express = require('express');
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

// Routes
app.get("/", function(req, res)
{
   res.render("index.html");
});

app.get("/earth", function(req, res)
{
    res.render("earth.html");
});

app.get("/mars", function(req, res)
{
    res.render("mars.html");
});

app.get("/mercury", function(req, res)
{
    res.render("mercury.html");
});

app.get("/venus", function (req, res)
{
    res.render("venus.html");
});

// Starting server
app.listen(process.env.PORT, process.env.IP, function()
{
    console.log("Running Express server...");
});