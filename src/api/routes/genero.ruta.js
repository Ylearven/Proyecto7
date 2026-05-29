const {
  getGenero,
  getGeneroByID,
  getGeneroByNombre,
  postGenero,
  deleteGenero,
  updateGenero
} = require('../controllers/genero.controlador')

const generoRouter = require('express').Router()

generoRouter.get('/nombre/:nombre', getGeneroByNombre)
generoRouter.get('/:id', getGeneroByID)
generoRouter.get('/', getGenero)
generoRouter.post('/', postGenero)
generoRouter.put('/:id', updateGenero)
generoRouter.delete('/:id', deleteGenero)

module.exports = generoRouter
