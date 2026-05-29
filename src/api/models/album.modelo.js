const mongoose = require('mongoose')
const albumSchema = new mongoose.Schema(
  {
    Nombre: { type: String, required: true },
    Imagen: { type: String, required: true },
    Lanzamiento: { type: Number, required: true }
  },
  {
    timestamps: true,
    collection: 'Album'
  }
)
const albumModel = mongoose.model('Album', albumSchema)
module.exports = albumModel
