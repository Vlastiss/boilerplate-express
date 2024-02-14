let express = require('express');
let app = express();

// app.get("/", (req, res) => {
//     res.send("Hello Express")
// })

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
})


// app.use(express.static("/public" + "/public/style.css")); 
app.use("/public", express.static(__dirname + "/public"));






























// console.log("Hello World!")
 module.exports = app;
