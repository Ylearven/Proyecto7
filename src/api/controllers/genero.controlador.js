const Genero = require('../models/genero.modelo')

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
      .populate('Genero')
      .populate('Solsita')
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
    return res.status(400).json('Erron en la solicitud POST')
  }
}
const putGenero = async (req, res, next) => {
  try {
    const { id } = req.params
    const updates = req.body
    if (updates.Genero && updates.Genero.length) {
      const genero = await Genero.findById(id)
      if (!genero) {
        return res.status(404).json('Genero no encontrado')
      }
      const generoSet = new Set([
        ...Genero.Grupo.map(String),
        Genero.Solista.map(String)
      ])
      updates.Genero.forEach((item) => generoSet.add(String(item)))
      updates.Genero = Array.from(generoSet)
    }
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
    const updates = req.body
    /*  const newgenero = new Genero(req.body) */
    /*  newgenero._id = id */
    const genero = await Genero.findById(id)
    if (!genero) {
      return res.status(404).json('Genero no encontrado')
    }
    if (updates.Grupo && updates.Solista) {
      const generoSet = new Set([
        ...Genero.Grupo.map(String),
        ...Genero.Solista.map(String),
        ...updates.Grupo.map(String),
        ...updates.Solista.map(String)
      ])
      newgenero.Grupo.forEach((item) => generoSet.add(String(item)))
      newgenero.Solista.forEach((item) => generoSet.add(String(item)))
      updates.Grupo = Array.from(generoSet)
      updates.Solista = Array.from(generoSet)
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
  putGenero,
  postGenero,
  deleteGenero,
  UpdateGenero
}
