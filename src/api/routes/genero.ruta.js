const {
  getGenero,
  getGeneroByID,
  getGeneroByNombre,
  putGenero,
  postGenero,
  deleteGenero
} = require('../controllers/genero.controlador')

const generoRouter = require('express').Router()

generoRouter.get('/Nombre/:Nombre', getGeneroByNombre)
generoRouter.get('/:id', getGeneroByID)
generoRouter.get('/', getGenero)
generoRouter.post('/', postGenero)
generoRouter.put('/:id', putGenero)
generoRouter.delete('/:id', deleteGenero)

module.exports = generoRouter
