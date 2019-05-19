const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//creating

const HitmanSchema = new Schema({
    name:{
        type: String,
        required:[ true, 'Name field is required' ]
    },
    rank:{
        type: String,
    },
    available:{
        type: Boolean,
        default: false
    }
});

const Hitman = mongoose.model('hitman',HitmanSchema);

module.exports = Hitman;
