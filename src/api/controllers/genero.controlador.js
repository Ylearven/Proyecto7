const Genero = require('../models/genero.modelo')
const { updateGrupo } = require('./grupo.controlador')

const getGenero = async (req, res, next) => {
  try {
    const genero = await Genero.find().populate('Grupo').populate('Solista')
    return res.status(200).json(genero)
  } catch (error) {
    return res.status(400).json('Error en la solicitud del GET')
  }
}
const getGeneroByID = async (req, res, next) => {
  try {
    const { id } = req.params
    const genero = await Genero.findById(id)
      .populate('Grupo')
      .populate('Solista')
    return res.status(200).json(genero)
  } catch (error) {
    return res.status(400).json('Error en la solicitud ID')
  }
}
const getGeneroByNombre = async (req, res, next) => {
  try {
    const { Nombre } = req.params
    const genero = await Genero.find({ Nombre })
      .populate('Grupo')
      .populate('Solista')
    return res.status(200).json(genero)
  } catch (error) {
    return res.status(400).json('Error en la solicitud NOMBRE')
  }
}

const postGenero = async (req, res, next) => {
  try {
    const { Nombre } = req.body
    const generoExiste = await Genero.findOne({ Nombre })
    if (generoExiste) {
      return res.status(400).json('El genero ya existe')
    }
    const newgenero = new Genero(req.body)
    const generoSaved = await newgenero.save()
    return res.status(201).json(generoSaved)
  } catch (error) {
    return res.status(400).json('Error en la solicitud POST')
  }
}

const deleteGenero = async (req, res, next) => {
  try {
    const { id } = req.params
    const generoDeleted = await Genero.findByIdAndDelete(id)
    return res.status(200).json(generoDeleted)
  } catch (error) {
    return res.status(400).json('Error en la solicitud DELETE')
  }
}
const updateGenero = async (req, res, next) => {
  try {
    const { id } = req.params
    const updates = req.body
    const genero = await Genero.findById(id)
    if (!genero) {
      return res.status(404).json('Genero no encontrado')
    }
    if (updates.Grupo) {
      const grupoSet = new Set([
        ...genero.Grupo.map(String),
        ...updates.Grupo.map(String)
      ])
      updates.Grupo = Array.from(grupoSet)
    }
    if (updates.Solista) {
      const solistaSet = new Set([
        ...genero.Solista.map(String),
        ...updates.Solista.map(String)
      ])
      updates.Solista = Array.from(solistaSet)
    }
    const generoUpdated = await Genero.findByIdAndUpdate(
      id,
      { $set: updates },
      {
        new: true
      }
    )
    return res.status(200).json(generoUpdated)
  } catch (error) {
    return res.status(400).json('Error en UPDATE')
  }
}
module.exports = {
  getGenero,
  getGeneroByID,
  getGeneroByNombre,
  postGenero,
  deleteGenero,
  updateGenero
}
