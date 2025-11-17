const User = require('../api/models/users.modelo')
const { verifyJwt } = require('../config/jwt')

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.replace('Bearer', '')
    if (!token) {
      return res.status(401).json('Autorización requerida')
    }
    const decoded = verifyJwt(token)
    if (!decoded?.id) {
      return res.status(401).json({ message: 'Autorización no válida' })
    }
    const user = await User.findById(decoded.id).lean()
    if (!user) {
      return res.status(404).json('Usuario no encontrado')
    }
    const { password, ...userSafe } = user
    req.user = userSafe
    next()
  } catch (error) {
    return res.status(400).json('No estás autorizado auth')
  }
}

const isAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.replace('Bearer', '')
    if (!token) {
      return res.status(401).json('Autorización requerida, no token provided')
    }
    const decoded = verifyJwt(token)
    if (!decoded?.id) {
      return res.status(401).json({ message: 'Token invalido' })
    }

    const user = await User.findById(decoded.id).lean()
    if (!user) {
      return res.status(404).json('Usuario no encontrado')
    }

    if (user.rol !== 'admin') {
      return res.status(403).json('Accion permitida solo a administradores')
    }
    req.user = user
    next()
  } catch (error) {
    return res.status(400).json('No estás autorizado como Admin')
  }
}

module.exports = { isAuth, isAdmin }
