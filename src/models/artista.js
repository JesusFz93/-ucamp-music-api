const { Schema, model } = require('mongoose');

const AuthorSchema = new Schema({
    "nombre": {
        type: String,
        required: true
    },
    "foto":{
        type: String,
        required: true
    },
    "album" : {
        type: Array,
        required: true
    }
})

module.exports = model('author', AuthorSchema);
