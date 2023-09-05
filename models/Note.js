const mongoose = require('mongoose');
const Schema = mongoose.schema;

const noteSchema = new Schema({
    text: { type: String, required: true },
    user: { type: ObjectId, required: true }
}, 
{ timestamps: true }
);
