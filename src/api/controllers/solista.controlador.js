const Solista = require('../models/solista.modelo')

const getSolista = async (req, res, next) => {
  try {
    const solista = await Solista.find().populate('Album')
    return res.status(200).json(solista)
  } catch (error) {
    return res.status(400).json('Error en la solicitud del GET')
  }
}
const getSolistaByID = async (req, res, next) => {
  try {
    const { id } = req.params
    const solista = await Solista.findById(id).populate('Album')
    return res.status(200).json(solista)
  } catch (error) {
    return res.status(400).json('Error en la solicitud ID')
  }
}
const getSolistaByNombre = async (req, res, next) => {
  try {
    const { Nombre } = req.params
    const solista = await Solista.find({ Nombre }).populate('Album')
    return res.status(200).json(solista)
  } catch (error) {
    return res.status(400).json('Error en la solicitud NOMBRE')
  }
}
const getSolistaByDebut = async (req, res, next) => {
  try {
    const { Debut } = req.params
    const solista = await Solista.find({ Debut }).populate('Album')
    return res.status(200).json(solista)
  } catch (error) {
    return res.status(400).json('Error en la solicitud DEBUT')
  }
}
const postSolista = async (req, res, next) => {
  try {
    const newsolista = new Solista(req.body)
    const solistaSaved = await newsolista.save()
    return res.status(201).json(solistaSaved)
  } catch (error) {
    return res.status(400).json('Erron en la solicitud POST')
  }
}
const putSolista = async (req, res, next) => {
  try {
    const { id } = req.params
    const updates = req.body
    const solistaUpdated = await Solista.findByIdAndUpdate(
      id,
      { $set: updates },
      { new: true, runValidators: true }
    )
    return res.status(200).json(solistaUpdated)
  } catch (error) {
    return res.status(400).json('Error en la solicitud PUT')
  }
}

const deleteSolista = async (req, res, next) => {
  try {
    const { id } = req.params
    const solistaDeleted = await Solista.findByIdAndDelete(id)
    return res.status(200).json(solistaDeleted)
  } catch (error) {
    return res.status(400).json('Error en la solicitud DELETE')
  }
}
const Updatesolista = async (req, res, next) => {
  try {
    const { id } = req.params
    const newsolista = new Solista(req.body)
    newsolista._id = id
    const solistaUpdated = await Solista.findByIdAndUpdate(id, newsolista, {
      new: true
    })
    return res.status(200).json(solistaUpdated)
  } catch (error) {
    return res.status(400).json('Error en UPDATE')
  }
}
module.exports = {
  getSolista,
  getSolistaByID,
  getSolistaByNombre,
  getSolistaByDebut,
  putSolista,
  postSolista,
  deleteSolista,
  Updatesolista
}
