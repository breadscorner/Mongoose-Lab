const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const petSchema = new Schema({
  name: {
    type: String,
    required: true
  }
},
  {
    collection: 'Pet',
    timestamps: true
  });
  
const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;