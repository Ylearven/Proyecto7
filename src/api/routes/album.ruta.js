const {
  getAlbum,
  getAlbumById,
  getAlbumByNombre,
  getAlbumByLanzamiento,
  postAlbum,
  deleteAlbum,
  UpdateAlbum
} = require('../controllers/album.controlador')

const albumRouter = require('express').Router()

albumRouter.get('/nombre/:nombre', getAlbumByNombre)
albumRouter.get('/lanzamiento/:lanzamiento', getAlbumByLanzamiento)
albumRouter.get('/:id', getAlbumById)
albumRouter.get('/', getAlbum)
albumRouter.post('/', postAlbum)
albumRouter.put('/:id', UpdateAlbum)
albumRouter.delete('/:id', deleteAlbum)

module.exports = albumRouter
