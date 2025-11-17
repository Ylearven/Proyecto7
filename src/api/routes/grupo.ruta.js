const {
  getGrupo,
  getGrupoByID,
  getGrupoByNombre,
  getGrupoByDebut,
  getGrupoByComponentes,
  postGrupo,
  deleteGrupo,
  UpdateGrupo
} = require('../controllers/grupo.controlador')

const grupoRouter = require('express').Router()
grupoRouter.get('/nombre/:nombre', getGrupoByNombre)
grupoRouter.get('/debut/:debut', getGrupoByDebut)
grupoRouter.get('/componentes/:componentes', getGrupoByComponentes)
grupoRouter.get('/:id', getGrupoByID)
grupoRouter.get('/', getGrupo)
grupoRouter.post('/', postGrupo)
grupoRouter.put('/:id', UpdateGrupo)
grupoRouter.delete('/:id', deleteGrupo)

module.exports = grupoRouter
