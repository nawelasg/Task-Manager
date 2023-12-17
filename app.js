const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

//Setting Up middleware
app.use(express.json())


//Setting up routes
app.get(`/hello`, (req,res)=>{
    res.send(`Task Manager App`);   
})

app.use('/api/v1/tasks', tasks)


//ports
const port = 3000;

app.listen(port, console.log(`Server is Running on Port ${port}`));