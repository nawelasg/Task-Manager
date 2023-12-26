const mongoose = require('mongoose')

const TaskSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must provide an Name'],
        trim: true,
        maxlength: [20, "Name can not be more than 20 characters"],
        minlenght: [3, "Name must be at least 3 characters long"]
    },
    completed: {
        type: Boolean,
        default: false,
    },
})

module.exports = mongoose.model('Task', TaskSchema)