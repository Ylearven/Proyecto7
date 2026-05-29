const mongoose = require('mongoose')
const solistaSchema = new mongoose.Schema(
  {
    Nombre: { type: String, required: true },
    Imagen: { type: String, required: true },
    Debut: { type: Number, required: true },
    Album: [{ type: mongoose.Types.ObjectId, ref: 'Album' }]
  },
  {
    timestamps: true,
    collection: 'Solista'
  }
)
const SolistaModel = mongoose.model('Solista', solistaSchema)
module.exports = SolistaModel
