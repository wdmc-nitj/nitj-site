const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const ClubSchema = new Schema({
  ClubName: { type: String, required: true },
  ClubWebsite: { type: String, required: false },
  ClubImg:  [{type: String, required: false}],
  ClubDesc :{type:String,required:true},
  ClubExtraContent :{type:String,required:false},
  
  date: { type: Date, required: false  , default: Date.now},
}, {
    timestamps: true,
});

const Club = mongoose.model('Club', ClubSchema);

module.exports = Club;