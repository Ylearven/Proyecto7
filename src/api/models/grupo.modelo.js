const mongoose = require('mongoose')
const grupoSchema = new mongoose.Schema(
  {
    Nombre: { type: String, required: true },
    Imagen: { type: String, required: true },
    Componentes: { type: String, required: true },
    Debut: { type: Number, required: true },
    Album: [{ type: mongoose.Types.ObjectId, ref: 'Album' }]
  },
  {
    timestamps: true,
    collection: 'Grupo'
  }
)
const GrupoModel = mongoose.model('Grupo', grupoSchema)
module.exports = GrupoModel
