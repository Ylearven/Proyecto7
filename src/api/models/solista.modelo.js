const mongoose = require('mongoose')
const solistaSchema = new mongoose.Schema(
  {
    Nombre: { type: String, require: true },
    Imagen: { type: String, require: true },
    Debut: { type: Number, require: true },
    Album: [{ type: mongoose.Types.ObjectId, ref: 'Album', require: false }]
  },
  {
    timestamps: true,
    collection: 'Solista'
  }
)
const SolistaModel = mongoose.model('Solista', solistaSchema, 'Solista')
module.exports = SolistaModel
