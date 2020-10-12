const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const infoSchema = mongoose.Schema({
  
    email: {
        type: String,
        maxlength: 50
    },
    name: {
        type: String
    },
    link: {
        type: String
    },
    domain: {
        type: Array,
        default: 0
    },
    platfrom: {
        type: Array,
        default: 0
    },
    radiobox: {
        type: String,
        required:true,
     
    },
    service: {
        type: String,
        default: 1
    },
    
}, { timestamps: true })



const Info = mongoose.model('Info', infoSchema);

module.exports = { Info }