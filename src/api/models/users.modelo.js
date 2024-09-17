const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    password: { type: String, required: true },
    rol: {
      type: String,
      required: true,
      enum: ['admin', 'user'],
      default: 'user'
    }
  },
  {
    timestamps: true,
    collection: 'Usuario'
  }
)
userSchema.pre('save', function () {
  this.password = bcrypt.hashSync(this.password, 10)
})
const UserModel = mongoose.model('Usuario', userSchema, 'Usuario')
module.exports = UserModel
