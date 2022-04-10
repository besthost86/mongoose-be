const {model, Schema, SchemaTypes} = require('mongoose')

const schema = Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: SchemaTypes.ObjectId,
        ref: 'Person'
    }
})


module.exports = model('Story', schema)