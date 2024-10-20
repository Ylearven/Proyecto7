const { generateSign } = require('../../config/jwt')
const User = require('../models/users.modelo')
const bcrypt = require('bcrypt')

const getUser = async (req, res, next) => {
  try {
    const users = await User.find()
    return res.status(200).json(users)
  } catch (error) {
    return res.status(400).json('Error en el GET')
  }
}

const buscarUsuario = async (userName) => {
  try {
    const user = await User.findOne({ userName })
    return user
  } catch (error) {
    return res.status(400).json('ERROR en buscar Usuario')
  }
}

const registerUser = async (req, res, next) => {
  try {
    const { userName, password, rol } = req.body

    const duplicadoUser = await buscarUsuario(userName)
    if (duplicadoUser) {
      return res.status(400).json({ message: 'Nombre de usuario ocupado' })
    }
    const nuevoUser = new User({
      userName,
      password,
      rol: rol || 'user'
    })

    const guardarUser = await nuevoUser.save()
    return res.status(201).json(guardarUser)
  } catch (error) {
    return res.status(400).json({ message: 'Error al registrar el usuario' })
  }
}

const loginUser = async (req, res, next) => {
  try {
    const { userName, password } = req.body
    const user = await buscarUsuario(userName)
    if (!user) {
      return res.status(400).json({ message: 'El usuario no existe' })
    }
    const passwordMatch = bcrypt.compareSync(password, user.password)
    if (passwordMatch) {
      const token = generateSign(user._id)
      return res.status(200).json({ user, token })
    } else {
      return res.status(400).json('Constraseña incorrecta')
    }
  } catch (error) {
    return res.status(400).json('Error en el LOGIN')
  }
}

const updateRolUser = async (req, res, next) => {
  const { userId } = req.params
  const { role } = req.body
  try {
    if (!['admin', 'user'].includes(role)) {
      return res.status(400).json({ message: 'Rol inválido' })
    }
    const user = await User.findById(userId)
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }
    user.rol = role
    await user.save()
    return res.status(200).json({ message: 'Rol actualizado' })
  } catch (error) {
    return res.status(400).json('Error en la actualización de rol')
  }
}

const updateUser = async (req, res, next) => {
  const { userId } = req.params
  const { userName, password } = req.body
  try {
    const user = await User.findById(userId)
    if (!user) {
      return res.status(404).json('Usuario no encontrado')
    }
    if (userName) {
      user.userName = userName
    }
    if (password) {
      user.password = bcrypt.hashSync(password, 10)
    }
    await user.save()
    return res.status(200).json('Usuario actualizado')
  } catch (error) {
    return res.status(400).json('Error en la actualización de usuario')
  }
}
const deleteUser = async (req, res, next) => {
  const { userId } = req.params
  try {
    const user = await User.findByIdAndDelete(userId)
    if (!user) {
      return res.status(404).json('Usuario no encontrado')
    }
    return res.status(200).json('Ususario eliminado')
  } catch (error) {
    return res.status(400).json('Error al eliminar', error)
  }
}
module.exports = {
  getUser,
  registerUser,
  loginUser,
  updateRolUser,
  updateUser,
  deleteUser
}
