const {
  getSolista,
  getSolistaByID,
  getSolistaByNombre,
  getSolistaByDebut,
  putSolista,
  postSolista,
  deleteSolista
} = require('../controllers/solista.controlador')

const solistaRouter = require('express').Router()
solistaRouter.get('/Nombre/:Nombre', getSolistaByNombre)
solistaRouter.get('/Debut/:Debut', getSolistaByDebut)
solistaRouter.get('/:id', getSolistaByID)
solistaRouter.get('/', getSolista)
solistaRouter.post('/', postSolista)
solistaRouter.put('/:id', putSolista)
solistaRouter.delete('/:id', deleteSolista)

module.exports = solistaRouter
