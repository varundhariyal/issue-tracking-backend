const mongoose = require('mongoose')
const time = require('../libs/timeLib')
const schema = mongoose.Schema

//auth schema
let authSchema = new schema({
    userId: {
        type: String
    },
    authToken: {
        type: String
    },
    tokenSecret: {
        type: String
    },
    tokenGenerationTime: {
        type: Date,
        default: time.now()
    }
})
module.exports = mongoose.model('Auth', authSchema)