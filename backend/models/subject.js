const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let subjectSchema = new Schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    section: {
        type: String
    },
    credit: {
        type: Number
    }
}, {
    collection: 'subjects'
})

module.exports = mongoose.model('Subject', subjectSchema);