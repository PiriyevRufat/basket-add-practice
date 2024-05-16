const mongoose = require("mongoose")


const Categories = mongoose.model("Categories", new mongoose.Schema({
    image: {
        type: String,
        required:true
    },
    title: {
        type: String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    }
}))

module.exports = { Categories }