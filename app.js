
const express = require("express")
const app = express()
const tasks = require("./routes/tasks")
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware =  require('./middleware/error-handler')

//Setting Up middleware
app.use(express.static('./public'))
app.use(express.json())


//Setting up routes
app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

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