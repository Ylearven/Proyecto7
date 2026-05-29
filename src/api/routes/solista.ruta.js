const { updateGrupo } = require('../controllers/grupo.controlador')
const {
  getSolista,
  getSolistaByID,
  getSolistaByNombre,
  getSolistaByDebut,
  postSolista,
  deleteSolista,
  updateSolista
} = require('../controllers/solista.controlador')

const solistaRouter = require('express').Router()
solistaRouter.get('/nombre/:nombre', getSolistaByNombre)
solistaRouter.get('/debut/:debut', getSolistaByDebut)
solistaRouter.get('/:id', getSolistaByID)
solistaRouter.get('/', getSolista)
solistaRouter.post('/', postSolista)
solistaRouter.put('/:id', updateSolista)
solistaRouter.delete('/:id', deleteSolista)

module.exports = solistaRouter
