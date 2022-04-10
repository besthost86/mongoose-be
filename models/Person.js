const {model, Schema, SchemaTypes} = require('mongoose')

const schema = Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})


module.exports = model('Person', schema)