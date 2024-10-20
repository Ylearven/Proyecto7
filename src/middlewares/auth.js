const User = require('../api/models/users.modelo')
const { verifyJwt } = require('../config/jwt')

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization
    if (!token) {
      return res.status(401).json('Autorización requerida')
    }
    const parsedToken = token.replace('Bearer ', '')
    const { id } = verifyJwt(parsedToken)

    const user = await User.findById(id)
    if (!user) {
      return res.status(404).json('Usuario no encontrado')
    }
    req.user = { ...user._doc, password: null }
    next()
  } catch (error) {
    return res.status(400).json('No estás autorizado auth')
  }
}

const isAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization
    if (!token) {
      return res.status(401).json('Autorización requerida, no token provided')
    }
    const parsedToken = token.replace('Bearer ', '')
    const decoded = verifyJwt(parsedToken)
    /* const { id } = verifyJwt(parsedToken)  */

    const user = await User.findById(decoded.id)
    if (!user) {
      return res.status(404).json('Usuario no encontrado')
    }

    if (user.rol !== 'admin') {
      return res.status(403).json('Accion permitida solo a administradores')
    }
    next()
  } catch (error) {
    return res.status(400).json('No estás autorizado Admin')
  }
}

module.exports = { isAuth, isAdmin }
