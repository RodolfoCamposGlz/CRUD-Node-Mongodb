const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    gender:String,
    actors:{
        type:[String]
    },
    description:{
        type:String
    },
    year:Number
});

const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;