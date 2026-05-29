const {
  getAlbum,
  getAlbumById,
  getAlbumByNombre,
  getAlbumByLanzamiento,
  postAlbum,
  deleteAlbum,
  updateAlbum
} = require('../controllers/album.controlador')

const albumRouter = require('express').Router()

albumRouter.get('/nombre/:nombre', getAlbumByNombre)
albumRouter.get('/lanzamiento/:lanzamiento', getAlbumByLanzamiento)
albumRouter.get('/:id', getAlbumById)
albumRouter.get('/', getAlbum)
albumRouter.post('/', postAlbum)
albumRouter.put('/:id', updateAlbum)
albumRouter.delete('/:id', deleteAlbum)

module.exports = albumRouter
