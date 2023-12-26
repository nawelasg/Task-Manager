//Setting Up Routes
const Task = require('../models/Task')
const getAllTasks = async (req,res) => {

    try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const createTask = async (req,res) =>{
    
    try {
        const task = await Task.create(req.body)
    res.status(201).json({ task })
    } 
    
    catch (error) {
        res.status(500).json({msg:error})
    }
    
}
const getTask = async (req,res) =>{
    try {
        const { name } = req.params
        const task = await Task.findOne({ name })
        
        if(!task){
            return res.status(404).json({msg: `No task with name : ${name}`})
        }


        res.status(200).json({ task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
    
}

const updateTask = (req,res) =>{
    res.send('Update Task')
}

const deleteTask = async (req,res) =>{
    try {
        const{ name } =  req.params
        const task = await Task.findOneAndDelete({ name })
        if(!task){
            return res.status(404).json({msg: `No task with name : ${name}`})
        }
        // res.status(200).json({ task })
        // res.status(200).send()
        res.status(200).json({ task : null, status: 'Success'})
    } catch (error) {
        res.status(500).json({msg:error})
    }
    res.send('Delete Task')
}

module.exports = {
    getAllTasks,createTask,getTask,updateTask,deleteTask
}