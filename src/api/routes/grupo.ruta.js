const {
  getGrupo,
  getGrupoByID,
  getGrupoByNombre,
  getGrupoByDebut,
  getGrupoByComponentes,
  putGrupo,
  postGrupo,
  deleteGrupo
} = require('../controllers/grupo.controlador')

const grupoRouter = require('express').Router()
grupoRouter.get('/Nombre/:Nombre', getGrupoByNombre)
grupoRouter.get('/Debut/:Debut', getGrupoByDebut)
grupoRouter.get('/Componentes/:Componentes', getGrupoByComponentes)
grupoRouter.get('/:id', getGrupoByID)
grupoRouter.get('/', getGrupo)
grupoRouter.post('/', postGrupo)
grupoRouter.put('/:id', putGrupo)
grupoRouter.delete('/:id', deleteGrupo)

module.exports = grupoRouter
