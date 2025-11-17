const Album = require('../models/album.modelo')

const getAlbumByNombre = async (req, res, next) => {
  try {
    const { Nombre } = req.params
    const album = await Album.find({ Nombre })
    return res.status(200).json(album)
  } catch (error) {
    return res.status(400).json('Error en la solicitud NOMBRE')
  }
}
const getAlbumByLanzamiento = async (req, res, next) => {
  try {
    const { Lanzamiento } = req.params
    const album = await Album.find({
      Lanzamiento: { $lte: Number(Lanzamiento) }
    })
    return res.status(200).json(album)
  } catch (error) {
    return res.status(400).json('Error en la solicitud LANZAMIENTO')
  }
}
const getAlbumById = async (req, res, next) => {
  try {
    const { id } = req.params
    const album = await Album.findById(id)
    return res.status(200).json(album)
  } catch (error) {
    return res.status(400).json('Error en la solicitud ID')
  }
}
const getAlbum = async (req, res, next) => {
  try {
    const album = await Album.find()
    return res.status(200).json(album)
  } catch (error) {
    return res.status(400).json('Error en la solicitud GET')
  }
}
const postAlbum = async (req, res, next) => {
  try {
    const { Nombre } = req.body
    const albumExiste = await Album.findOne({ Nombre })
    if (albumExiste) {
      return res.status(400).json('Ya existe este album')
    }
    const newalbum = new Album(req.body)
    const albumSaved = await newalbum.save()
    return res.status(200).json(albumSaved)
  } catch (error) {
    return res.status(400).json('Error en la solicitud POST')
  }
}
const deleteAlbum = async (req, res, next) => {
  try {
    const { id } = req.params
    const albumDeleted = await Album.findByIdAndDelete(id)
    return res.status(200).json(albumDeleted)
  } catch (error) {
    return res.status(400).json('Error en la solicitud DELETE')
  }
}
const UpdateAlbum = async (req, res, next) => {
  try {
    const { id } = req.params
    const updates = req.body
    const { Nombre } = req.body
    const albumExiste = await Album.findOne({
      _id: { $ne: id },
      Nombre
    })
    if (albumExiste) {
      return res.status(400).json('Ya existe el album')
    }
    const albumUpdated = await Album.findByIdAndUpdate(id, newalbum, {
      new: true
    })
    return res.status(200).json(albumUpdated)
  } catch (error) {
    return res.status(400).json('Error en UPDATE')
  }
}
module.exports = {
  getAlbum,
  getAlbumById,
  getAlbumByNombre,
  getAlbumByLanzamiento,
  postAlbum,
  deleteAlbum,
  UpdateAlbum
}
