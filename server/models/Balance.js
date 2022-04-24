const { Schema, model } = require('mongoose')

const Balance = new Schema({
  type: { type: String, unique: true },
  value: { type: Number, default: 0 },
  user: { type: ObjectId, ref: 'User' },
})

module.exports = model('Balance', Balance)
