const mongoose = require('mongoose')
const generoSchema = new mongoose.Schema(
  {
    Nombre: { type: String, required: true },
    Grupo: [{ type: mongoose.Types.ObjectId, ref: 'Grupo' }],
    Solista: [{ type: mongoose.Types.ObjectId, ref: 'Solista' }]
  },
  {
    timestamps: true,
    collection: 'Genero'
  }
)
const generoModel = mongoose.model('Genero', generoSchema)
module.exports = generoModel
