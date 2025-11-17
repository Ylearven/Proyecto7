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
    const { Nombre } = req.body
    const grupoExiste = await Grupo.findOne({ Nombre })
    if (grupoExiste) {
      return res.status(400).json('El grupo ya existe')
    }
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
    if (updates.Grupo && updates.Grupo.length) {
      const grupo = await Grupo.findById(id)
      if (!grupo) {
        return res.status(404).json('Grupo no encontrado')
      }
      const grupoSet = new Set(Grupo.Album.map(String))
      updates.Grupo.forEach((item) => grupoSet.add(String(item)))
      updates.Grupo = Array.from(grupoSet)
    }

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
    const updates = req.body
    if (updates.Album && updates.Album.length) {
      const grupo = await Grupo.findById(id)
      if (!grupo) {
        return res.status(404).json('Grupo no encontrado')
      }
      const albumSet = new Set(grupo.Album.map((id) => id.toString()))
      updates.Album.forEach((id) => albumSet.add(id.toString()))
      updates.Album = Array.from(albumSet)
    }
    const grupoUpdated = await Grupo.findByIdAndUpdate(
      id,
      { $set: updates },
      { new: true, runValidators: true }
    )
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
  postGrupo,
  deleteGrupo,
  UpdateGrupo
}
