const Genero = require('../models/genero.modelo')

const getGenero = async (req, res, next) => {
  try {
    const generoGrupo = await Genero.find().populate('Grupo')
    const generoSolista = await Genero.find().populate('Solista')
    return res.status(200).json(generoGrupo, generoSolista)
  } catch (error) {
    return res.status(400).json('Error en la solicitud del GET')
  }
}
const getGeneroByID = async (req, res, next) => {
  try {
    const { id } = req.params
    const generoGrupo = await Genero.findById(id).populate('Genero')
    const generoSolista = await Genero.findById(id).populate('Solsita')
    return res.status(200).json(generoGrupo, generoSolista)
  } catch (error) {
    return res.status(400).json('Error en la solicitud ID')
  }
}
const getGeneroByNombre = async (req, res, next) => {
  try {
    const { Nombre } = req.params
    const generoGrupo = await Genero.find({ Nombre }).populate('Grupo')
    const generoSolista = await Genero.find({ Nombre }).populate('Solista')
    return res.status(200).json(genero)
  } catch (error) {
    return res.status(400).json('Error en la solicitud NOMBRE')
  }
}

const postGenero = async (req, res, next) => {
  try {
    const newgenero = new Genero(req.body)
    const generoSaved = await newgenero.save()
    return res.status(201).json(generoSaved)
  } catch (error) {
    return res.status(400).json('Erron en la solicitud POST')
  }
}
const putGenero = async (req, res, next) => {
  try {
    const { id } = req.params
    const updates = req.body
    const generoUpdated = await Genero.findByIdAndUpdate(
      id,
      { $set: updates },
      { new: true, runValidators: true }
    )
    return res.status(200).json(generoUpdated)
  } catch (error) {
    return res.status(400).json('Error en la solicitud PUT')
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
const UpdateGenero = async (req, res, next) => {
  try {
    const { id } = req.params
    const newgenero = new Genero(req.body)
    newgenero._id = id
    const generoUpdated = await Genero.findByIdAndUpdate(id, newgenero, {
      new: true
    })
    return res.status(200).json(generoUpdated)
  } catch (error) {
    return res.status(400).json('Error en UPDATE')
  }
}
module.exports = {
  getGenero,
  getGeneroByID,
  getGeneroByNombre,
  putGenero,
  postGenero,
  deleteGenero,
  UpdateGenero
}
