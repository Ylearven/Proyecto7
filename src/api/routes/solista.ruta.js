const { UpdateGrupo } = require('../controllers/grupo.controlador')
const {
  getSolista,
  getSolistaByID,
  getSolistaByNombre,
  getSolistaByDebut,
  postSolista,
  deleteSolista
} = require('../controllers/solista.controlador')

const solistaRouter = require('express').Router()
solistaRouter.get('/nombre/:nombre', getSolistaByNombre)
solistaRouter.get('/debut/:debut', getSolistaByDebut)
solistaRouter.get('/:id', getSolistaByID)
solistaRouter.get('/', getSolista)
solistaRouter.post('/', postSolista)
solistaRouter.put('/:id', UpdateGrupo)
solistaRouter.delete('/:id', deleteSolista)

module.exports = solistaRouter
