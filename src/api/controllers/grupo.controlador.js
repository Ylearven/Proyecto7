const Grupo = require('../models/grupo.modelo')

const getGrupo = async (req, res, next) => {
  try {
    const grupo = await Grupo.find().populate('Album')
    return res.status(200).json(grupo)
  } catch (error) {
    return res.status(400).json('Error en la solicitud del GET')
  }
}
const getGrupoByID = async (req, res, next) => {
  try {
    const { id } = req.params
    const grupo = await Grupo.findById(id).populate('Album')
    return res.status(200).json(grupo)
  } catch (error) {
    return res.status(400).json('Error en la solicitud ID')
  }
}
const getGrupoByNombre = async (req, res, next) => {
  try {
    const { Nombre } = req.params
    const grupo = await Grupo.find({ Nombre }).populate('Album')
    return res.status(200).json(grupo)
  } catch (error) {
    return res.status(400).json('Error en la solicitud NOMBRE')
  }
}
const getGrupoByDebut = async (req, res, next) => {
  try {
    const { Debut } = req.params
    const grupo = await Grupo.find({ Debut }).populate('Album')
    return res.status(200).json(grupo)
  } catch (error) {
    return res.status(400).json('Error en la solicitud DEBUT')
  }
}
const getGrupoByComponentes = async (req, res, next) => {
  try {
    const { Componentes } = req.params
    const grupo = await Grupo.find({ Componentes }).populate('Album')
    return res.status(200).json(grupo)
  } catch (error) {
    return res.status(400).json('Error en la solicitud COMPONENTES')
  }
}
const postGrupo = async (req, res, next) => {
  try {
    const newgrupo = new Grupo(req.body)
    const grupoSaved = await newgrupo.save()
    return res.status(201).json(grupoSaved)
  } catch (error) {
    return res.status(400).json('Erron en la solicitud POST')
  }
}
const putGrupo = async (req, res, next) => {
  try {
    const { id } = req.params
    const updates = req.body
    const grupoUpdated = await Grupo.findByIdAndUpdate(
      id,
      { $set: updates },
      { new: true, runValidators: true }
    )
    return res.status(200).json(grupoUpdated)
  } catch (error) {
    return res.status(400).json('Error en la solicitud PUT')
  }
}

const deleteGrupo = async (req, res, next) => {
  try {
    const { id } = req.params
    const grupoDeleted = await Grupo.findByIdAndDelete(id)
    return res.status(200).json(grupoDeleted)
  } catch (error) {
    return res.status(400).json('Error en la solicitud DELETE')
  }
}
const UpdateGrupo = async (req, res, next) => {
  try {
    const { id } = req.params
    const newgrupo = new Grupo(req.body)
    newgrupo._id = id
    const grupoUpdated = await Grupo.findByIdAndUpdate(id, newgrupo, {
      new: true
    })
    return res.status(200).json(grupoUpdated)
  } catch (error) {
    return res.status(400).json('Error en UPDATE')
  }
}
module.exports = {
  getGrupo,
  getGrupoByID,
  getGrupoByNombre,
  getGrupoByDebut,
  getGrupoByComponentes,
  putGrupo,
  postGrupo,
  deleteGrupo,
  UpdateGrupo
}
