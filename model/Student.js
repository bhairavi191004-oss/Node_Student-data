const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true,
        minlength : 3
    },
    age:{
        type : Number,
        required : true,
        min : 10
    },
    email:{
        type : String,
        required : true,
    },
    phone:{
        type: String,
        required : true,
        minlength : 10
    },
    collegename:{
        type: String,
        required : true,
    },
    department:{
        type: String,
        required : true,
    },
    native:{
        type: String,
        required : true,
    },
    dob:{
        type: String,
        required : true,
    }
},{
    timestamps : true
})

const studentModel = mongoose.model("Student",studentSchema)
module.exports = studentModel