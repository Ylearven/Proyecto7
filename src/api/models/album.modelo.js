const mongoose = require('mongoose')
const albumSchema = new mongoose.Schema(
  {
    Nombre: { type: String, required: true },
    Imagen: { type: String, required: true },
    Lanzamiento: { type: Number, require: true }
  },
  {
    timestamps: true,
    collection: 'Album'
  }
)
const albumModel = mongoose.model('Album', albumSchema, 'Album')
module.exports = albumModel
