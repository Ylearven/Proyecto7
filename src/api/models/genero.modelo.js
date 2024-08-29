const mongoose = require('mongoose')
const generoSchema = new mongoose.Schema(
  {
    Nombre: { type: String, require: true },
    Grupo: [{ type: mongoose.Types.ObjectId, ref: 'Grupo', require: false }],
    Solista: [{ type: mongoose.Types.ObjectId, ref: 'Solista', require: false }]
  },
  {
    timestamps: true,
    collection: 'Genero'
  }
)
const generoModel = mongoose.model('Genero', generoSchema, 'Genero')
module.exports = generoModel
