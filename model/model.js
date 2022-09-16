const mongoose = require('mongoose')


const EmployeeSchema = mongoose.Schema({

    name : {
        type : String,
        require: true
    },

    lastname: {
        type: String,
        require: true
    },

    gender: {
        type: String,
        require: true
    },

    role: {
        type: String,
        require: true
    },

    department: {
        type: String,
        require: true
    }, 

    CreateAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('Employee', EmployeeSchema)


