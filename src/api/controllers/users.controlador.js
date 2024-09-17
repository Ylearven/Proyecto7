const User = require('../models/users.modelo')
const getUser = async (req, res, next) => {
  try {
    const users = await User.find()
    return res.status(200).json(users)
  } catch (error) {
    return res.status(400).json('Error en el GET')
  }
}

const buscarUsuario = async (userName) => {
  const user = await User.findOne({ userName })
  return user
}

const registerUser = async (req, res, next) => {
  try {
    const nuevoUser = new User({
      userName: req.body.userName,
      password: req.body.password,
      rol: 'user'
    })
    const duplicadoUser = await buscarUsuario(req.body.userName)
    if (duplicadoUser) {
      return res.status(400).json('Nombre de usuario ocupado')
    }
    const guardarUser = await nuevoUser.save()
    return res.status(201).json(guardarUser)
  } catch (error) {
    return res.status(400).json('Error en el register')
  }
}

const loginUser = async (req, res, next) => {
  try {
    const user = await buscarUsuario(req.body.userName)
    if (!user) {
      return res.status(400).json('El usuario no existe')
    }

    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = generateSign(user._id)
      return res.status(200).json({ user, token })
    } else {
      return res.status(400).json('Constraseña incorrecta')
    }
  } catch (error) {
    return res.status(400).json('Error en el LOGIN')
  }
}

module.exports = { getUser, registerUser, loginUser }
