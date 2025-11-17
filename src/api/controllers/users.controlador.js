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

const registerUser = async (req, res, next) => {
  try {
    const { userName, password } = req.body

    const UserExiste = await User.findOne({ userName })
    if (UserExiste) {
      return res.status(400).json({ message: 'Nombre de usuario ocupado' })
    }
    const hashedPassword = bcrypt.hashSync(password, 10)
    const nuevoUser = new User({
      userName,
      password: hashedPassword,
      rol: 'user'
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
    const user = await User.findOne({ userName })
    if (!user) {
      return res.status(400).json({ message: 'El usuario no existe' })
    }
    const passwordMatch = bcrypt.compareSync(password, user.password)
    if (!passwordMatch) {
      return res.status(400).json('Constraseña incorrecta')
    }
    const token = generateSign(user._id)
    return res.status(200).json({ user, token })
  } catch (error) {
    return res.status(400).json('Error en el LOGIN')
  }
}

const updateRolUser = async (req, res, next) => {
  try {
    const { userId } = req.params
    const { role } = req.body
    if (req.user.rol !== 'admin') {
      return res
        .status(403)
        .json({ message: 'Solo un admin puede cambiar roles' })
    }
    const user = await User.findById(userId)
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }
    user.rol = role
    await user.save()
    return res.status(200).json({ message: 'Rol actualizado' })
  } catch (error) {
    return res.status(404).json({ message: 'Error al actualizar el rol' })
  }
}

const updateUser = async (req, res, next) => {
  try {
    const { userId } = req.params
    const { userName, password } = req.body
    const user = await User.findById(userId)
    if (!user) {
      return res.status(404).json('Usuario no encontrado')
    }
    if (userName) user.userName = userName
    if (password) user.password = bcrypt.hashSync(password, 10)

    await user.save()
    return res.status(200).json('Usuario actualizado')
  } catch (error) {
    return res.status(400).json('Error en la actualización de usuario')
  }
}
const deleteUser = async (req, res, next) => {
  const { userId } = req.params
  const requester = req.user
  try {
    const userToDelete = await User.findById(userId)
    if (!userToDelete) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }
    const isAdmin = requester.rol === 'admin'
    const isSelf = requester._id.toString() == userId
    if (!isAdmin && !isSelf) {
      return res
        .status(403)
        .json({ message: 'No autorizado para eliminar este usuario' })
    }
    await User.findByIdAndDelete(userId)
    return res.status(200).json('Usuario eliminado')
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
