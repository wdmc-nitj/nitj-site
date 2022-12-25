const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const ScholershipSchema = new Schema({
  Name:{type:String,required:true},
  Content:{type:String,required:true},
  date: { type: Date, required: false  , default: Date.now},
}, {
  timestamps: true,
},
{ strict: true });

const Scholership  = mongoose.model('Scholership', ScholershipSchema);

module.exports = Scholership;