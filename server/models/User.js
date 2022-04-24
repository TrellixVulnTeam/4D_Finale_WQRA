const { Schema, model, ObjectId } = require('mongoose')

const User = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  roles: [{ type: String, ref: 'Role' }],
  isBlocked: { type: Boolean, default: false },
  balanceRUB: { type: Number, default: 0 },
  balanceUSD: { type: Number, default: 0 },
  balanceSystem: [{ type: ObjectId, ref: 'Balance' }],
  date: { type: Date, required: true },
  transactions: [{ type: ObjectId, ref: 'Transactions' }],
})

module.exports = model('User', User)
