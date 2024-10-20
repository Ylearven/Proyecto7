const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    rol: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user'
    }
  },
  {
    timestamps: true,
    collection: 'Usuario'
  }
)
userSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next()

  //Encriptar la contraseña
  this.password = bcrypt.hashSync(this.password, 10)
  next()
})
const UserModel = mongoose.model('Usuario', userSchema, 'Usuario')
module.exports = UserModel
