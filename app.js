const express = require("express");
const mongoose  = require("mongoose");
const app = express();
const UserRoutes = require("./routes/userRouter");
const bodyParser = require("body-parser")

const mongoUrl = "mongodb+srv://raphealins:JY0408@cluster0.be2ovby.mongodb.net/?retryWrites=true&w=majority"//url get from mongodb
app.use(bodyParser.json())
app.use("/crud",UserRoutes )


app.listen(2000,()=>{
    console.log("server is runnning on port 2000");
})

mongoose.connect(mongoUrl).then(()=>{
    console.log("connected to database");
}).catch((e)=>console.log(e))