const mongoose = require('mongoose')
const schema = mongoose.Schema
const user = new schema({
    userId: {
        type: String
    },
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    mobileNumber: {
        type: Number,
        default: ''
    },
    password: {
        type: String,
        required: true
    },
    createdOn: {
        type: String,
        default: ''
    },
    //for social login
    provider: {
        type: String,
        default:'local'
    }
})

module.exports = mongoose.model('User', user)