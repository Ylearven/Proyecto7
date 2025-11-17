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
    const { Nombre } = req.body
    const solistaExiste = await Solista.findOne({ Nombre })
    if (solistaExiste) {
      return res.status(400).json('El solista ya existe')
    }
    const newsolista = new Solista(req.body)
    const solistaSaved = await newsolista.save()
    return res.status(201).json(solistaSaved)
  } catch (error) {
    return res.status(400).json('Error en la solicitud POST')
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
    const updates = req.body
    if (updates.Album && updates.Album.length) {
      const solista = await Solista.findById(id)
      if (!solista) {
        return res.status(404).json('Solista no encontrado')
      }
      const albumSet = new Set(solista.Album.map((id) => id.toString()))
      updates.Album.forEach((id) => albumSet.add(id.toString()))
      updates.Album = Array.from(albumSet)
    }
    const solistaUpdated = await Solista.findByIdAndUpdate(
      id,
      {
        $set: updates
      },
      { new: true, runValidators: true }
    )
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
  postSolista,
  deleteSolista,
  Updatesolista
}
