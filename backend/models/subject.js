const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let subjectSchema = new Schema({
    name: {
        type: String
    },
    teacher: {
        type: String
    },
    day: {
        type: String
    },
    hours: {
        type: String
    },
    details: {
        type: String
    }
}, {
    collection: 'subjects'
})

module.exports = mongoose.model('Subject', subjectSchema);