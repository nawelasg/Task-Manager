const mongoose = require('mongoose')

const connectDB = (url)=>{
    mongoose
    .connect(url, {url:true,
        useCreateIndex:true,
        useFindandModify:false,
        useUnifiedTopology:true,
    })
}

module.exports = connectDB