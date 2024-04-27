const mongoose = require('mongoose');
//const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]
});

// Objeto vindo vazio
// schema.pre('save', async (next) => {
//     this.password = await bcrypt.hash(this.password, 8);
//     next();
// });

module.exports = mongoose.model('User', schema);