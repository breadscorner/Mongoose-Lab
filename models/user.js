const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name:
  {
    type: String,
    required: true
  },
  email:
  {
    type: String,
    required: true
  },
  password_hash:
  {
    type: String,
    required: false
  },
  password_salt:
  {
    type: String,
    required: true
  },
  pets:
    [{
      type: Schema.Types.ObjectId, ref: 'Pet'
    }]
},
  {
    collection: 'User',
    timestamps: true
  });
const User = mongoose.model('User', userSchema);

module.exports = User; 