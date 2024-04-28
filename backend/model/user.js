const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]
});

module.exports = mongoose.model('User', schema);