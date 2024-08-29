const mongoose = require('mongoose')
const grupoSchema = new mongoose.Schema(
  {
    Nombre: { type: String, require: true },
    Imagen: { type: String, require: true },
    Componentes: { type: String, require: true },
    Debut: { type: Number, require: true },
    Album: [{ type: mongoose.Types.ObjectId, ref: 'Album', require: false }]
  },
  {
    timestamps: true,
    collection: 'Grupo'
  }
)
const GrupoModel = mongoose.model('Grupo', grupoSchema, 'Grupo')
module.exports = GrupoModel
