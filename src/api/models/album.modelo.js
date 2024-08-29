const mongoose = require('mongoose')
const albumSchema = new mongoose.Schema(
  {
    Nombre: { type: String, require: true },
    Imagen: { type: String, require: true },
    Lanzaminto: { type: Number, require: true }
  },
  {
    timestamps: true,
    collation: 'Album'
  }
)
const AlbumModel = mongoose.model('Album', albumSchema, 'Album')
module.exports = AlbumModel
