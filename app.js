
const express = require("express")
const app = express()
const tasks = require("./routes/tasks")
const connectDB = require('./db/connect')
require('dotenv').config()


//Setting Up middleware
app.use(express.static('./public'))
app.use(express.json())


//Setting up routes
app.use('/api/v1/tasks', tasks)


//ports
const port = 3000;

const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is Running on Port ${port}`))
    }
    catch(error){
        console.log(error)
    }
}

start()