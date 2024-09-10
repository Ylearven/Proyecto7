const {
  getAlbum,
  getAlbumById,
  getAlbumByNombre,
  getAlbumByLanzamiento,
  postAlbum,
  putAlbum,
  deleteAlbum
} = require('../controllers/album.controlador')

const albumRouter = require('express').Router()

albumRouter.get('Nombre/:Nombre', getAlbumByNombre)
albumRouter.get('Lanzamiento/:Lanzamiento', getAlbumByLanzamiento)
albumRouter.get('/:id', getAlbumById)
albumRouter.get('/', getAlbum)
albumRouter.post('/', postAlbum)
albumRouter.put('/:id', putAlbum)
albumRouter.delete('/:id', deleteAlbum)

module.exports = albumRouter
