const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/Tasks")
.then(()=>{
    console.log("mongo Connected");
})
.catch(()=>{
    console.log("Mongo Not Connected");
})

const newSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    dateofbirth:{
        type : Date,
        required: true,
    },
    status:{
        type: String,
        default:'active',
    }
})
const collection = mongoose.model("collection", newSchema)
module.exports = collection